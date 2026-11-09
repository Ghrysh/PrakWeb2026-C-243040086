// src/ItemTransaksi.jsx
function ItemTransaksi({ transaksi, onHapus }) {
  const isPemasukan = transaksi.jenis === 'pemasukan';
  const tanda = isPemasukan ? '+' : '-';

  return (
    <li className="item">
      <div className="item-info">
        <span className="item-keterangan">{transaksi.keterangan}</span>
        <span className="item-jenis">
          {isPemasukan ? 'Pemasukan' : 'Pengeluaran'}
        </span>
      </div>

      <span className={isPemasukan ? 'pemasukan' : 'pengeluaran'}>
        {tanda} Rp {Number(transaksi.nominal).toLocaleString('id-ID')}
      </span>

      <button
        className="tombol tombol-merah tombol-kecil"
        onClick={() => onHapus(transaksi.id)}
      >
        Hapus
      </button>
    </li>
  );
}

export default ItemTransaksi;
