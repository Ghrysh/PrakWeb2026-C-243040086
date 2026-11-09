// src/App.jsx
import { useState, useEffect } from 'react';
import './App.css';
import Kartu from './Kartu';
import FormTransaksi from './FormTransaksi';
import ItemTransaksi from './ItemTransaksi';

function App() {
  const [daftarTransaksi, setDaftarTransaksi] = useState(() => {
    const dataTersimpan = localStorage.getItem('catatan-keuangan');
    if (dataTersimpan) {
      return JSON.parse(dataTersimpan);
    }
    return [
      { id: 1, keterangan: 'Uang Saku Mingguan', nominal: 250000, jenis: 'pemasukan' },
      { id: 2, keterangan: 'Beli Buku Modul Praktikum', nominal: 45000, jenis: 'pengeluaran' },
    ];
  });

  const totalPemasukan = daftarTransaksi
    .filter((t) => t.jenis === 'pemasukan')
    .reduce((acc, t) => acc + Number(t.nominal), 0);

  const totalPengeluaran = daftarTransaksi
    .filter((t) => t.jenis === 'pengeluaran')
    .reduce((acc, t) => acc + Number(t.nominal), 0);

  const totalSaldo = totalPemasukan - totalPengeluaran;

  useEffect(() => {
    localStorage.setItem('catatan-keuangan', JSON.stringify(daftarTransaksi));
    document.title = `Saldo: Rp ${totalSaldo.toLocaleString('id-ID')} - Catatan Keuangan`;
  }, [daftarTransaksi, totalSaldo]);

  const tambahTransaksi = (dataBaru) => {
    const transaksiBaru = {
      id: Date.now(),
      keterangan: dataBaru.keterangan,
      nominal: Number(dataBaru.nominal),
      jenis: dataBaru.jenis,
    };
    setDaftarTransaksi([...daftarTransaksi, transaksiBaru]);
  };

  const hapusTransaksi = (id) => {
    setDaftarTransaksi(daftarTransaksi.filter((t) => t.id !== id));
  };

  return (
    <div className="wadah">
      <h1 className="judul">Catatan Keuangan Mini</h1>
      <p className="subjudul">Laboratorium Informatika - Tugas Terstruktur Modul 2</p>

      <Kartu judul="Ringkasan Saldo">
        <p className="saldo-utama">Rp {totalSaldo.toLocaleString('id-ID')}</p>
        <div className="ringkasan-baris">
          <span>
            Total Pemasukan:{' '}
            <strong className="pemasukan">
              + Rp {totalPemasukan.toLocaleString('id-ID')}
            </strong>
          </span>
          <span>
            Total Pengeluaran:{' '}
            <strong className="pengeluaran">
              - Rp {totalPengeluaran.toLocaleString('id-ID')}
            </strong>
          </span>
        </div>
      </Kartu>

      <Kartu judul="Tambah Transaksi">
        <FormTransaksi onTambah={tambahTransaksi} />
      </Kartu>

      <Kartu judul="Daftar Transaksi">
        {daftarTransaksi.length === 0 ? (
          <p className="kosong">Belum ada transaksi tercatat. Silakan tambahkan transaksi baru!</p>
        ) : (
          <ul className="daftar">
            {daftarTransaksi.map((transaksi) => (
              <ItemTransaksi
                key={transaksi.id}
                transaksi={transaksi}
                onHapus={hapusTransaksi}
              />
            ))}
          </ul>
        )}
      </Kartu>
    </div>
  );
}

export default App;
