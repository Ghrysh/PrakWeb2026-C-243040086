// === Komponen Utama App ===
import KartuProfil from './KartuProfil';
import KartuProyek from './KartuProyek';

function App() {
  // --- Data Rencana Praktikum ---
  const daftarPraktikum = [
    {
      id: 101,
      kode: 'IF211',
      nama: 'Pemrograman Web (React & Laravel)',
      sks: 3,
      hari: 'Senin',
    },
    {
      id: 102,
      kode: 'IF212',
      nama: 'Sistem Basis Data (PostgreSQL)',
      sks: 3,
      hari: 'Rabu',
    },
    {
      id: 103,
      kode: 'IF213',
      nama: 'Rekayasa Perangkat Lunak Terapan',
      sks: 3,
      hari: 'Kamis',
    },
    {
      id: 104,
      kode: 'IF214',
      nama: 'Arsitektur Sistem Terdistribusi',
      sks: 2,
      hari: 'Jumat',
    },
  ];

  // --- Data Proyek Portofolio ---
  const daftarProyek = [
    {
      id: 1,
      judul: 'Showcase Portofolio Mini Mahasiswa',
      deskripsi:
        'Aplikasi web profil dan showcase proyek praktikum interaktif berbasis React JS dan Vite dengan arsitektur modular komponen.',
      teknologi: ['React', 'Vite', 'JavaScript', 'CSS3'],
      linkGithub: 'https://github.com/Ghrysh/PrakWeb2026-C-243040086.git',
    },
    {
      id: 2,
      judul: 'Sistem Informasi Praktikum Mahasiswa',
      deskripsi:
        'Sistem manajemen jadwal perkuliahan dan laboratorium terpadu untuk monitoring SKS serta kehadiran praktikan secara real-time.',
      teknologi: ['Laravel', 'PostgreSQL', 'TailwindCSS'],
      linkGithub: 'https://github.com/Ghrysh/PrakWeb2026-C-243040086.git',
    },
    {
      id: 3,
      judul: 'Task Management & Study Tracker',
      deskripsi:
        'Aplikasi web produktivitas untuk mengelola tugas perkuliahan, prioritas penugasan, dan pelacak deadline praktikum.',
      teknologi: ['React', 'Context API', 'LocalStorage'],
      linkGithub: 'https://github.com/Ghrysh/PrakWeb2026-C-243040086.git',
    },
    {
      id: 4,
      judul: 'Katalog Kuliner & Resep Tradisional',
      deskripsi:
        'Aplikasi web katalog resep kuliner nusantara dengan fitur pencarian bahan, filter kategori makanan, dan antarmuka responsif.',
      teknologi: ['JavaScript', 'Bootstrap', 'REST API'],
      linkGithub: 'https://github.com/Ghrysh/PrakWeb2026-C-243040086.git',
    },
  ];

  // --- Event Handler ---
  const notifikasiSapaan = () => {
    alert(
      'Selamat datang di Modul 1! Anda berhasil menguasai fondasi arsitektur React JS.',
    );
  };

  return (
    <div
      style={{
        maxWidth: '900px',
        margin: '40px auto',
        padding: '0 24px',
        fontFamily: 'Arial, sans-serif',
        color: '#222',
      }}
    >
      {/* Header */}
      <header style={{ textAlign: 'center', marginBottom: '32px' }}>
        <h1 style={{ color: '#1B365D', margin: '0 0 8px' }}>
          Praktikum Pemrograman Web
        </h1>
        <p style={{ color: '#666', fontSize: '15px' }}>
          Laboratorium Informatika - Modul 1: Pengenalan React JS &amp; Vite
        </p>
      </header>

      {/* Bagian Profil */}
      <section style={{ marginBottom: '36px' }}>
        <h2
          style={{
            color: '#2C3E50',
            borderBottom: '2px solid #E1E4E8',
            paddingBottom: '8px',
          }}
        >
          Profil Mahasiswa Praktikan
        </h2>
        <KartuProfil
          nama="Ghryshvi Taushiiyah Dzickra"
          npm="243040086"
          kelas="IF - Praktikum"
          status="Aktif"
          fotoUrl="https://via.placeholder.com/80"
        />
      </section>

      {/* Bagian Showcase Portofolio Mini */}
      <section style={{ marginBottom: '36px' }}>
        <h2
          style={{
            color: '#2C3E50',
            borderBottom: '2px solid #E1E4E8',
            paddingBottom: '8px',
          }}
        >
          Showcase Portofolio Mini
        </h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
            gap: '16px',
            marginTop: '16px',
          }}
        >
          {daftarProyek.map((proyek) => (
            <KartuProyek
              key={proyek.id}
              judul={proyek.judul}
              deskripsi={proyek.deskripsi}
              teknologi={proyek.teknologi}
              linkGithub={proyek.linkGithub}
            />
          ))}
        </div>
      </section>

      {/* Bagian Rencana Praktikum */}
      <section style={{ marginBottom: '36px' }}>
        <h2
          style={{
            color: '#2C3E50',
            borderBottom: '2px solid #E1E4E8',
            paddingBottom: '8px',
          }}
        >
          Daftar Rencana Praktikum Semester (List Rendering)
        </h2>
        <div style={{ display: 'grid', gap: '12px', marginTop: '16px' }}>
          {daftarPraktikum.map((matkul) => (
            <div
              key={matkul.id}
              style={{
                padding: '14px 18px',
                backgroundColor: '#F8F9FA',
                borderLeft: '5px solid #1B365D',
                borderRadius: '4px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <div>
                <span style={{ fontWeight: 'bold', color: '#1B365D' }}>
                  {matkul.kode}
                </span>
                {' - '}
                {matkul.nama}
                <div
                  style={{
                    fontSize: '12px',
                    color: '#777',
                    marginTop: '4px',
                  }}
                >
                  Jadwal Sesi: {matkul.hari}
                </div>
              </div>
              <span
                style={{
                  backgroundColor: '#E1E4E8',
                  padding: '4px 10px',
                  borderRadius: '12px',
                  fontSize: '13px',
                }}
              >
                {matkul.sks} SKS
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Tombol Interaktivitas */}
      <div style={{ textAlign: 'center', marginTop: '40px', marginBottom: '20px' }}>
        <button
          onClick={notifikasiSapaan}
          style={{
            backgroundColor: '#1B365D',
            color: '#FFFFFF',
            padding: '12px 24px',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontWeight: 'bold',
            fontSize: '14px',
          }}
        >
          Uji Interaktivitas Event (Klik Disini)
        </button>
      </div>
    </div>
  );
}

export default App;
