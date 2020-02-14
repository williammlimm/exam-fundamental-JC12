function lelang(menit) {
    let hargaBaju = 10000
    let hargaCelana = 20000
    let hargaKacamata = 30000

    var naikBaju = 0.1
    var naikCelana = 0.2
    var naikKacamata = 0.3
    for(i = 1; i <= menit; i++){
        if(true){
            hargaBaju += hargaBaju*naikBaju
            hargaCelana += hargaCelana*naikCelana
            hargaKacamata += hargaKacamata*naikKacamata
            

        }     
        hargaBaju = Math.ceil(hargaBaju)
        hargaCelana = Math.ceil(hargaCelana)
        hargaKacamata = Math.ceil(hargaKacamata)
    }
    return `Di menit ${i - 1} Product Info \nNama Barang = Baju , harga = Rp. ${hargaBaju} \nNama Barang = Celana , harga = Rp. ${hargaCelana} \nNama Barang = Kacamata , harga = Rp. ${hargaKacamata}`
}
console.log(lelang(1))
console.log(lelang(5))
console.log(lelang(10))