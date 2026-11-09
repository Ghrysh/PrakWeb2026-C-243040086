// src/FormTransaksi.jsx
import { useState } from 'react';

function FormTransaksi({ onTambah }) {
  const [keterangan, setKeterangan] = useState('');
  const [nominal, setNominal] = useState('');
  const [jenis, setJenis] = useState('pemasukan');

  const angkaNominal = Number(nominal);
  const nominalTidakValid = nominal !== '' && angkaNominal <= 0;
  const tidakValid = keterangan.trim() === '' || nominal === '' || angkaNominal <= 0;

  const tanganiKirim = (event) => {
    event.preventDefault();
    if (tidakValid) return;

    onTambah({
      keterangan: keterangan.trim(),
      nominal: Number(nominal),
      jenis: jenis,
    });

    setKeterangan('');
    setNominal('');
    setJenis('pemasukan');
  };

  return (
    <form onSubmit={tanganiKirim}>
      <div className="baris">
        <input
          className="input"
          type="text"
          placeholder="Keterangan (contoh: Uang saku bulanan)"
          value={keterangan}
          onChange={(e) => setKeterangan(e.target.value)}
        />
      </div>
      <div className="baris">
        <input
          className="input"
          type="number"
          placeholder="Nominal (Rp)"
          value={nominal}
          onChange={(e) => setNominal(e.target.value)}
        />
        <select
          className="input"
          value={jenis}
          onChange={(e) => setJenis(e.target.value)}
        >
          <option value="pemasukan">Pemasukan</option>
          <option value="pengeluaran">Pengeluaran</option>
        </select>
        <button className="tombol" type="submit" disabled={tidakValid}>
          Tambah
        </button>
      </div>
      {nominalTidakValid && <p className="galat">Nominal harus lebih dari 0.</p>}
    </form>
  );
}

export default FormTransaksi;
