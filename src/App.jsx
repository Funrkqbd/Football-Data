const filterPills = ['Tất cả', 'Trực tiếp', 'Đá kết', 'Sắp diễn ra', 'Lịch thi đấu', 'Dự đoán', 'Nhận định', 'Bảng xếp hạng'];

const tabs = ['Kết quả', 'Lịch thi đấu', 'Dự đoán', 'Nhận định'];

const matches = [
  {
    league: 'Paraguayan Cup Women',
    date: '07/10 - Kết thúc',
    home: '2 de Mayo Women',
    away: 'Club Rubio Nu W',
    score: '3 - 1',
    homeCode: 'M',
    awayCode: 'R',
    homeColor: 'linear-gradient(135deg, #6d7cff, #8aa6ff)',
    awayColor: 'linear-gradient(135deg, #ffd369, #f59e0b)'
  },
  {
    league: 'CONCACAF Nations League',
    date: '07/10 - Kết thúc',
    home: 'Antigua Barbuda',
    away: 'Aruba',
    score: '3 - 2',
    homeCode: 'A',
    awayCode: 'A',
    homeColor: 'linear-gradient(135deg, #fb7185, #be123c)',
    awayColor: 'linear-gradient(135deg, #7dd3fc, #0ea5e9)'
  },
  {
    league: 'Uruguay Segunda League',
    date: '07/10 - Kết thúc',
    home: 'CA Terramoto',
    away: 'Salus',
    score: '0 - 1',
    homeCode: 'T',
    awayCode: 'S',
    homeColor: 'linear-gradient(135deg, #0f172a, #1e293b)',
    awayColor: 'linear-gradient(135deg, #fca5a5, #ef4444)'
  },
  {
    league: 'Brazilian Serie B',
    date: '07/10 - Kết thúc',
    home: 'Sport Club do Recife',
    away: 'Sao Bernardo',
    score: '2 - 1',
    homeCode: 'C',
    awayCode: 'S',
    homeColor: 'linear-gradient(135deg, #fbbf24, #f97316)',
    awayColor: 'linear-gradient(135deg, #7c3aed, #4f46e5)'
  }
];

function TeamBadge({ code, color }) {
  return <span className="team-badge" style={{ background: color }}>{code}</span>;
}

export default function App() {
  return (
    <div className="page-shell">
      <div className="dashboard-card">
        <header className="topbar">
          <div className="title-wrap">
            <span className="title-icon">⚽</span>
            <h1>KẾT QUẢ BÓNG ĐÁ</h1>
          </div>
        </header>

        <div className="filter-row">
          {filterPills.map((item, index) => (
            <button key={index} className={`filter-pill ${index === 0 ? 'active' : ''}`}>
              {item}
            </button>
          ))}
        </div>

        <div className="search-box">
          <span className="search-icon">◌</span>
          <input type="text" placeholder="Tìm giải đấu..." />
        </div>

        <section className="results-section">
          <div className="results-header">
            <div className="section-title-wrap">
              <span className="section-icon">🏆</span>
              <h2>KẾT QUẢ BÓNG ĐÁ THEO GIẢI NỔI BẬT</h2>
            </div>

            <div className="tabs">
              {tabs.map((tab, index) => (
                <button key={tab} className={`tab ${index === 0 ? 'selected' : ''}`}>
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="games-list">
            {matches.map((match) => (
              <article key={match.league} className="match-row">
                <div className="league-cell">
                  <h3>{match.league}</h3>
                  <p>{match.date}</p>
                </div>

                <div className="score-cell">
                  <div className="team trade-left">
                    <TeamBadge code={match.homeCode} color={match.homeColor} />
                    <span>{match.home}</span>
                  </div>

                  <div className="match-score">{match.score}</div>

                  <div className="team trade-right">
                    <TeamBadge code={match.awayCode} color={match.awayColor} />
                    <span>{match.away}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
