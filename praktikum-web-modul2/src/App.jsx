// src/App.jsx
import { useState, useEffect } from 'react';
import './App.css';
import Kartu from './Kartu';
import Penghitung from './Penghitung';
import FormTugas from './FormTugas';
import ItemTugas from './ItemTugas';

function App() {
  // 1. State utama: coba ambil dari localStorage, jika kosong pakai data contoh
  const [daftarTugas, setDaftarTugas] = useState(() => {
    const dataTersimpan = localStorage.getItem('daftar-tugas');
    if (dataTersimpan) {
      return JSON.parse(dataTersimpan); // ubah teks JSON kembali menjadi array
    }
    return [
      { id: 1, judul: 'Install Node.js dan Vite', selesai: true },
      { id: 2, judul: 'Pelajari useState', selesai: false },
    ];
  });

  // State untuk filter: 'semua' | 'belum' | 'selesai' (Tugas 1: In-Lab Task)
  const [filter, setFilter] = useState('semua');

  // Efek A: dijalankan SEKALI saat App pertama kali tampil
  useEffect(() => {
    console.log('Aplikasi Daftar Tugas siap digunakan!');
  }, []);

  // Efek B: perbarui judul tab peramban setiap daftarTugas berubah
  useEffect(() => {
    const sisa = daftarTugas.filter((tugas) => !tugas.selesai).length;
    document.title = `(${sisa}) Tugas Belum Selesai`;
  }, [daftarTugas]);

  // Efek C: simpan daftarTugas ke localStorage setiap kali berubah
  useEffect(() => {
    localStorage.setItem('daftar-tugas', JSON.stringify(daftarTugas));
  }, [daftarTugas]);

  // 2. Menambah tugas: buat array BARU berisi tugas lama + tugas baru
  const tambahTugas = (judul) => {
    const tugasBaru = { id: Date.now(), judul: judul, selesai: false };
    setDaftarTugas([...daftarTugas, tugasBaru]);
  };

  // 3. Mengubah status selesai: salin tugas yang dicentang, biarkan yang lain
  const ubahStatus = (id) => {
    const daftarBaru = daftarTugas.map((tugas) => {
      if (tugas.id === id) {
        return { ...tugas, selesai: !tugas.selesai }; // salinan dengan status dibalik
      }
      return tugas; // tugas lain tidak berubah
    });
    setDaftarTugas(daftarBaru);
  };

  // 4. Menghapus tugas: ambil semua tugas KECUALI yang id-nya sama
  const hapusTugas = (id) => {
    setDaftarTugas(daftarTugas.filter((tugas) => tugas.id !== id));
  };

  // [Tugas 2] Hapus semua tugas yang selesai (Conditional Rendering)
  const hapusSemuaSelesai = () => {
    setDaftarTugas(daftarTugas.filter((tugas) => !tugas.selesai));
  };

  // 5. Nilai turunan: dihitung dari state, tidak perlu state baru
  const jumlahSelesai = daftarTugas.filter((tugas) => tugas.selesai).length;

  // [Tugas 1] Filter tugas sebelum ditampilkan dengan .map()
  const daftarTerfilter = daftarTugas.filter((tugas) => {
    if (filter === 'selesai') return tugas.selesai;
    if (filter === 'belum') return !tugas.selesai;
    return true; // 'semua'
  });

  return (
    <div className="wadah">
      <h1 className="judul">Daftar Tugas Praktikum</h1>
      <p className="subjudul">Laboratorium Informatika - Modul 2: React Lanjutan</p>

      <Penghitung />

      <Kartu judul="Tambah Tugas Baru">
        <FormTugas onTambah={tambahTugas} />
      </Kartu>

      <Kartu judul="Daftar Tugas">
        <p className="ringkasan">
          {jumlahSelesai} dari {daftarTugas.length} tugas selesai
        </p>

        {/* [Tugas 1 & 2] Filter Tombol & Tombol Hapus Semua yang Selesai */}
        <div className="baris" style={{ marginBottom: '16px' }}>
          <button
            type="button"
            className={`tombol tombol-kecil ${filter === 'semua' ? 'tombol-aktif' : 'tombol-outline'}`}
            onClick={() => setFilter('semua')}
          >
            Semua
          </button>
          <button
            type="button"
            className={`tombol tombol-kecil ${filter === 'belum' ? 'tombol-aktif' : 'tombol-outline'}`}
            onClick={() => setFilter('belum')}
          >
            Belum Selesai
          </button>
          <button
            type="button"
            className={`tombol tombol-kecil ${filter === 'selesai' ? 'tombol-aktif' : 'tombol-outline'}`}
            onClick={() => setFilter('selesai')}
          >
            Selesai
          </button>

          {/* Tombol Hapus Semua yang Selesai (Hanya muncul jika ada tugas selesai) */}
          {jumlahSelesai > 0 && (
            <button
              type="button"
              className="tombol tombol-merah tombol-kecil"
              style={{ marginLeft: 'auto' }}
              onClick={hapusSemuaSelesai}
            >
              Hapus Semua yang Selesai
            </button>
          )}
        </div>

        {/* Conditional rendering dengan ternary: tampilkan pesan jika kosong */}
        {daftarTerfilter.length === 0 ? (
          <p className="kosong">Belum ada tugas. Yuk tambahkan tugas pertamamu!</p>
        ) : (
          <ul className="daftar">
            {daftarTerfilter.map((tugas) => (
              <ItemTugas
                key={tugas.id}
                tugas={tugas}
                onUbahStatus={ubahStatus}
                onHapus={hapusTugas}
              />
            ))}
          </ul>
        )}
      </Kartu>
    </div>
  );
}

export default App;
