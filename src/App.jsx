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
      judul: 'RuangDonasi API',
      deskripsi:
        'Layanan Backend REST API untuk platform donasi online, mencakup autentikasi pengguna dengan JWT, manajemen transaksi dan kampanye, serta integrasi payment gateway Midtrans.',
      teknologi: ['Go', 'Gin', 'GORM', 'PostgreSQL', 'Midtrans', 'Docker'],
      linkGithub: 'https://github.com/Ghrysh/RuangDonasi_Api',
    },
    {
      id: 2,
      judul: 'Game Edukasi PGSD (Kincir Air)',
      deskripsi:
        'Aplikasi web game edukatif interaktif untuk siswa sekolah dasar guna memperkenalkan konsep kincir air melalui modul sains terapan, budaya, engineering, dan simulasi merakit.',
      teknologi: ['Laravel', 'PHP', 'Blade', 'TailwindCSS', 'JavaScript'],
      linkGithub: 'https://github.com/Ghrysh/game_pgsd',
    },
    {
      id: 3,
      judul: 'Sixperience - Event Organizer Platform',
      deskripsi:
        'Website company profile interaktif untuk organisasi event organizer, dilengkapi showcase portofolio acara, fitur peta interaktif lokasi event, dan dashboard admin manajemen klien.',
      teknologi: ['Laravel', 'PHP', 'Blade', 'TailwindCSS', 'MySQL', 'Docker'],
      linkGithub: 'https://github.com/Ghrysh/Sixperience',
    },
    {
      id: 4,
      judul: 'RM Pawon - Sistem Pemesanan Restoran',
      deskripsi:
        'Aplikasi web pemesanan menu rumah makan yang menyediakan fitur keranjang interaktif, pelacakan status pesanan real-time, pencetakan receipt, serta panel manajemen menu bagi admin.',
      teknologi: ['Laravel', 'PHP', 'Blade', 'MySQL', 'JavaScript'],
      linkGithub: 'https://github.com/Ghrysh/rm_pawon',
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
