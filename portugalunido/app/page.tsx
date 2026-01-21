"use client";

import { useState } from "react";
import { data, Section } from "./data/data";

type Status = "unknown" | "online" | "offline";

export default function Home() {
  const initialOpenState: Record<string, boolean> = {};
  data.forEach((section) => (initialOpenState[section.category] = false));

  const [expandedAll, setExpandedAll] = useState(false);
  const [openSections, setOpenSections] = useState<Record<string, boolean>>(initialOpenState);
  const [status, setStatus] = useState<Record<string, Status>>({});
  const [loadingUrls, setLoadingUrls] = useState<Record<string, boolean>>({});
  const [loadingSections, setLoadingSections] = useState<Record<string, boolean>>({});
  const [cooldownUrls, setCooldownUrls] = useState<Record<string, boolean>>({});
  const [cooldownSections, setCooldownSections] = useState<Record<string, boolean>>({});
  const [cooldownAll, setCooldownAll] = useState(false);
  const [search, setSearch] = useState("");

  const toggleAll = () => {
    const newState: Record<string, boolean> = {};
    data.forEach((section) => (newState[section.category] = !expandedAll));
    setOpenSections(newState);
    setExpandedAll(!expandedAll);
  };

  const getRobotsUrl = (url: string) => {
    const u = new URL(url);
    return `${u.origin}/robots.txt`;
  };

  const checkWebsite = async (url: string) => {
    if (cooldownUrls[url]) return;

    setStatus((prev) => ({ ...prev, [url]: "unknown" }));
    setLoadingUrls((prev) => ({ ...prev, [url]: true }));
    setCooldownUrls((prev) => ({ ...prev, [url]: true }));

    const robotsUrl = getRobotsUrl(url);

    try {
      // Tentativa 1: robots.txt (normalmente acessível)
      await fetch(robotsUrl, { mode: "no-cors" });
      setStatus((prev) => ({ ...prev, [url]: "online" }));
    } catch {
      try {
        // Tentativa 2: favicon (fallback)
        const faviconUrl = `${new URL(url).origin}/favicon.ico`;
        await fetch(faviconUrl, { mode: "no-cors" });
        setStatus((prev) => ({ ...prev, [url]: "online" }));
      } catch {
        setStatus((prev) => ({ ...prev, [url]: "offline" }));
      }
    } finally {
      setLoadingUrls((prev) => ({ ...prev, [url]: false }));
      setTimeout(() => {
        setCooldownUrls((prev) => ({ ...prev, [url]: false }));
      }, 5000);
    }
  };

  const checkSection = async (section: Section) => {
    if (cooldownSections[section.category] || cooldownAll) return;

    setLoadingSections((prev) => ({ ...prev, [section.category]: true }));
    setCooldownSections((prev) => ({ ...prev, [section.category]: true }));

    await Promise.all(section.items.map((item) => checkWebsite(item.url)));

    setLoadingSections((prev) => ({ ...prev, [section.category]: false }));
    setTimeout(() => {
      setCooldownSections((prev) => ({ ...prev, [section.category]: false }));
    }, 5000);
  };

  const checkAll = async () => {
    if (cooldownAll) return;

    setCooldownAll(true);
    const allUrls = data.flatMap((section) => section.items.map((item) => item.url));
    await Promise.all(allUrls.map((url) => checkWebsite(url)));

    setTimeout(() => {
      setCooldownAll(false);
    }, 5000);
  };

  const searchLower = search.toLowerCase();

  const filteredSections: Section[] = data
    .map((section) => {
      const sectionMatches = section.category.toLowerCase().includes(searchLower);

      const filteredItems = section.items.filter(
        (item) =>
          item.name.toLowerCase().includes(searchLower) ||
          item.description.toLowerCase().includes(searchLower)
      );

      if (!sectionMatches && filteredItems.length === 0) return null;

      return {
        ...section,
        items: sectionMatches ? section.items : filteredItems,
      };
    })
    .filter(Boolean) as Section[];

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>
          <span style={styles.homeIcon}>🇵🇹</span> Portugal Unido
        </h1>

        <input
          type="text"
          placeholder="Pesquisar..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={styles.searchInput}
        />

        <div style={styles.buttonsGroup}>
          <button
            style={{
              ...styles.toggleButton,
              opacity: cooldownAll ? 0.6 : 1,
              cursor: cooldownAll ? "not-allowed" : "pointer",
            }}
            onClick={checkAll}
            disabled={cooldownAll}
          >
            {cooldownAll ? "Aguarde" : "Verificar Tudo"}
          </button>

          <button style={styles.toggleButton} onClick={toggleAll}>
            {expandedAll ? "Recolher Tudo" : "Expandir Tudo"}
          </button>
        </div>
      </div>

      {filteredSections.map((section) => (
        <CollapsibleSection
          key={section.category}
          section={section}
          open={!!openSections[section.category]}
          setOpen={(value) =>
            setOpenSections((prev) => ({ ...prev, [section.category]: value }))
          }
          status={status}
          loadingUrls={loadingUrls}
          loadingSection={!!loadingSections[section.category]}
          cooldownUrls={cooldownUrls}
          cooldownSection={!!cooldownSections[section.category]}
          cooldownAll={cooldownAll}
          checkWebsite={checkWebsite}
          checkSection={() => checkSection(section)}
        />
      ))}

      <footer style={styles.footer}>
        <div style={styles.footerDescription}>
          <p style={styles.footerText}>
            O <strong>Portugal Unido</strong> é uma plataforma dedicada a reunir, num único local,
            uma vasta coleção de websites, serviços e recursos relevantes para Portugal.
            O objetivo é facilitar o acesso rápido, centralizado e organizado a serviços
            públicos, privados, informativos e comunitários, promovendo uma navegação mais
            simples, eficiente e acessível a todos.
          </p>
          <p style={styles.footerText}>
            Este projeto é totalmente aberto e colaborativo. Caso exista algum serviço,
            website ou recurso que considere relevante e que ainda não esteja listado,
            é livre de o adicionar através do repositório do projeto no GitHub.
          </p>
        </div>

        <div style={styles.footerSeparator} />

        <div style={styles.footerBottom}>
          <div>Criado por Dinizoides</div>
          <a
            style={styles.githubLink}
            href="https://github.com/Dinizoides/portugal-unido"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </footer>
    </div>
  );
}

function CollapsibleSection({
  section,
  open,
  setOpen,
  status,
  loadingUrls,
  loadingSection,
  cooldownUrls,
  cooldownSection,
  cooldownAll,
  checkWebsite,
  checkSection,
}: {
  section: Section;
  open: boolean;
  setOpen: (value: boolean) => void;
  status: Record<string, Status>;
  loadingUrls: Record<string, boolean>;
  loadingSection: boolean;
  cooldownUrls: Record<string, boolean>;
  cooldownSection: boolean;
  cooldownAll: boolean;
  checkWebsite: (url: string) => void;
  checkSection: () => void;
}) {
  return (
    <div style={styles.section}>
      <div style={styles.sectionHeader}>
        <div style={styles.sectionTitleWrapper} onClick={() => setOpen(!open)}>
          <span style={styles.sectionIcon}>{open ? "−" : "+"}</span>
          <h2 style={styles.sectionTitle}>{section.category}</h2>
        </div>

        <button
          style={{
            ...styles.checkSectionButton,
            opacity: loadingSection || cooldownSection || cooldownAll ? 0.6 : 1,
            cursor: loadingSection || cooldownSection || cooldownAll ? "not-allowed" : "pointer",
          }}
          onClick={checkSection}
          disabled={loadingSection || cooldownSection || cooldownAll}
        >
          {loadingSection
            ? "A Verificar..."
            : cooldownSection || cooldownAll
            ? "Aguarde"
            : "Verificar Secção"}
        </button>
      </div>

      {open && (
        <div style={styles.items}>
          {section.items.map((item) => (
            <div key={item.name} style={styles.item}>
              <div style={styles.itemLeft} onClick={() => window.open(item.url, "_blank")}>
                <div style={styles.itemIcon}>{item.icon}</div>
                <div>
                  <div style={styles.itemName}>{item.name}</div>
                  <div style={styles.itemDesc}>{item.description}</div>
                </div>
              </div>

              <button
                style={{
                  ...styles.checkButton,
                  backgroundColor:
                    status[item.url] === "online"
                      ? "#0a8c0a"
                      : status[item.url] === "offline"
                      ? "#b00000"
                      : "#444",
                  opacity: loadingUrls[item.url] || cooldownUrls[item.url] ? 0.6 : 1,
                }}
                onClick={() => checkWebsite(item.url)}
                disabled={loadingUrls[item.url] || cooldownUrls[item.url]}
              >
                {status[item.url] === "online"
                  ? "Online"
                  : status[item.url] === "offline"
                  ? "Offline"
                  : loadingUrls[item.url]
                  ? "A Verificar..."
                  : cooldownUrls[item.url]
                  ? "Aguarde"
                  : "Verificar"}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    backgroundColor: "#2b2b2b",
    color: "#cfcfcf",
    minHeight: "100vh",
    padding: "16px",
    maxWidth: "1000px",
    margin: "0 auto",
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "12px",
    flexWrap: "wrap",
    marginBottom: "16px",
  },
  title: {
    fontSize: "26px",
    margin: 0,
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  homeIcon: {
    fontSize: "28px",
  },
  searchInput: {
    padding: "10px 14px",
    borderRadius: "8px",
    border: "1px solid #fff",
    fontSize: "16px",
    backgroundColor: "#3b3b3b",
    color: "#fff",
    flex: "1",
    minWidth: "200px",
  },
  buttonsGroup: {
    display: "flex",
    gap: "10px",
  },
  toggleButton: {
    padding: "10px 14px",
    fontSize: "16px",
    borderRadius: "8px",
    border: "1px solid #fff",
    backgroundColor: "#3b3b3b",
    color: "#fff",
    fontWeight: "bold",
  },
  section: {
    border: "1px solid #444",
    borderRadius: "8px",
    marginBottom: "15px",
  },
  sectionHeader: {
    display: "flex",
    justifyContent: "space-between",
    padding: "12px 16px",
    background: "#3a3a3a",
  },
  sectionTitleWrapper: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
  },
  sectionTitle: {
    margin: 0,
    fontSize: "18px",
    fontWeight: "bold",
  },
  sectionIcon: {
    marginRight: "10px",
  },
  checkSectionButton: {
    padding: "10px 16px",
    borderRadius: "8px",
    border: "1px solid #fff",
    backgroundColor: "#3b3b3b",
    color: "#fff",
    fontWeight: "bold",
  },
  items: {
    padding: "12px 16px",
  },
  item: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px 0",
    borderBottom: "1px solid #444",
    alignItems: "center",
  },
  itemLeft: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    cursor: "pointer",
  },
  itemIcon: {
    fontSize: "22px",
    width: "35px",
  },
  itemName: {
    fontWeight: "bold",
  },
  itemDesc: {
    fontSize: "12px",
    color: "#d0d0d0",
  },
  checkButton: {
    padding: "10px 16px",
    borderRadius: "8px",
    border: "1px solid #fff",
    color: "#fff",
    fontWeight: "bold",
  },
  footer: {
    borderTop: "1px solid #444",
    marginTop: "30px",
    paddingTop: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  footerDescription: {
    maxWidth: "1000px",
  },
  footerText: {
    fontSize: "16px",
    lineHeight: "1.7",
    textAlign: "justify",
    marginBottom: "12px",
  },
  footerSeparator: {
    borderTop: "1px solid #444",
  },
  footerBottom: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: "12px",
  },
  githubLink: {
    color: "#cfcfcf",
    textDecoration: "underline",
  },
};
