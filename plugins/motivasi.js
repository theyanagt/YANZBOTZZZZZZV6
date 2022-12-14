let handler  = async (m, { conn }) => {
let motivasi = [
  "Hidup itu seperti mengendarai sebuah sepeda. Untuk menjaga keseimbangan, kamu harus terus bergerak",
  "Orang yang tak pernah membuat kesalahan, maka tak akan pernah mencoba sesuatu yang baru",
  "Kegagalan akan mengalahkan pecundang. Kegagalan akan menginspirasi pemenang",
  "Ia yang mengerjakan lebih dari apa yang dibayar pada suatu saat akan dibayar lebih dari apa yang ia kerjakan",
  "Hidup adalah perjalanan panjang di mana kamu akan menemukan ribuan keajaiban, perhatikan mereka.",
  "Kamu tidak bisa mekar begitu cepat, kamu harus tumbuh dulu.",
  "Hidup adalah kumpulan momen yang kamu simpan di hatimu.",
  "Hidup ditentukan oleh keputusanmu, jika kamu menginginkan hasil berbeda buatlah keputusan yang berbeda.",
  "Satu bab buruk dalam hidup itu tidak berarti adalah akhir, tetapi itu adalah awal dari babak baru dalam hidupmu.",
  "Kamu harus menangkap momen spesial dalam hidup yang akan memberikan kebahagiaan seumur hidup.",
  "Hidup akan menjadi tragis jika itu tidak lucu.",
  "Hidup itu seperti resep dengan semua bahan yang sempurna.",
  "Hidup hanya datang sekali, jadi lakukan apa yang membuatmu bahagia, dan berada di sekitar orang yang membuatmu tersenyum.",
  "Sulit untuk memulai babak baru dalam hidup ketika kamu tahu seseorang tidak akan ada di sana, tetapi ceritanya harus terus berjalan.",
  "Kehidupan yang baik adalah sebuah proses, bukan suatu keadaan yang ada dengan sendirinya. Kehidupan itu sendiri adalah arah, bukan tujuan.",
  "Kadang-kadang hidup seperti permainan, entah menang atau kalah tetapi kamu harus mengerahkan semua upaya terbaik.",
  "Hidup itu seperti perburuan harta karun, Anda harus memecahkan teka-teki untuk mencapai harta karun.",
  "Kamu pencipta hidupmu sendiri dan bisa tidak mengubah apa pun untuk orang lain.",
  "Jika kamu menjalani hidup dengan pilihan orang lain, maka hidupmu tidak akan lagi menjadi milikmu.",
  "Sehati bukan karena memberi, tapi sehati karena saling memahami.",
  "Terkadang hal-hal kecil membuat hidup layak dijalani.",
  "Jangan pernah berhenti menunjukkan kepada seseorang betapa mereka sangat berarti bagimu.",
  "Jangan pernah melupakan masa lalu karena akan selalu menjadi bagian dari hidup, tapi saya bisa belajar darinya dan mempersiapkan masa depan.",
  "Jangan sampai mengucap kata menyerah jika masih ingin hidupmu terus berlanjut.",
  "Jangan pernah biarkan kesedihan masa lalumu membuatmu merusak kebahagiaan saat ini.",
  "Ali Bin Abi Thalib Said Janganlah engkau mengucapkan perkataan yang engkau sendiri tak suka mendengarnya jika orang lain mengucapkannya kepadamu.",
  "Diam adalah jawaban terbaik dari semua pertanyaan bodoh, dan senyum adalah reaksi terbaik dalam semua situasi kritis.",
  "Jika kamu kreatif, kamu akan membangun sayap Anda sendiri untuk mencapai langit.",
  "Ubah dirimu untuk kebaikan, bukan untuk orang lain.",
  "Menunggu dan menanti itu berbeda, namun tidak ada yang menyenangkan.",
  "Jika kamu ingin tumbuh, serahkan semua yang membuatmu jatuh.",
  "Pada akhirnya, apa yang kita berikan dari diri kita sendiri itu benar-benar penting.",
  "Jadilah cantik dari dalam yang akan mencerminkan dari luar kepada orang lain.",
  "Apapun yang terjadi selama setahun terakhir ini. Bersyukurlah karena itu membuatmu lebih kuat menghadapi masa depan.",
  "Jika kamu menunggu sesuatu terjadi, kamu sudah terlambat.",
  "Jelajahi hal-hal baru dan belajar darinya karena hidup ini terlalu singkat.",
  "Kamu harus mengambil resiko, kamu harus menerima perubahan, maka hanya kamu yang akan memahami keajaiban hidup sepenuhnya.",
  "Kamu tidak bisa kembali dan mengubah hal-hal yang ada, tetapi kamu bisa belajar dari itu dan mengambil tindakan sekarang.",
  "Hal-hal baik membutuhkan waktu, jadi bersikaplah positif dan sabar.",
  "Kamu dapat mengubah dirimu sendiri, kamu tidak harus bergantung pada orang lain untuk mengubah diri sendiri.",
  "Kamu tidak memiliki kekuatan untuk kembali dan mengubah masa lalu, tetapi kamu memiliki kekuatan untuk memulai dari tempatmu sekarang dan mengubah masa depan.",
  "Kemenangan kecil itulah yang memberimu keberanian dan kepercayaan diri untuk mencapai hal-hal yang lebih besar dalam hidup.",
  "Jangan takut berjalan lambat, takutlah jika hanya berdiri diam.",
  "Berhenti bermimpi, mulailah bekerja dan kejar impianmu.",
  "Jangan tunda pekerjaanmu sampai besok, sementara kau bisa mengerjakannya hari ini.",
  "Jangan habiskan waktumu memukuli tembok dan berharap bisa mengubahnya menjadi pintu.",
  "Kunci kesuksesan adalah fokus pada tujuan, bukan hambatan.",
  "Tak ada batasan dalam hidup, kecuali yang kau buat sendiri.",
  "Lebih baik menangis di tengah hujan sehingga tidak ada yang bisa mengerti bahwa kamu bahagia atau kesakitan.",
  "Lupakan apa yang tertinggal, pikirkan ke depan, dan nikmati saat ini.",
  "Saya berharap saya bisa kembali ke hari-hari buruk dan mempelajari pelajaran yang saya lewatkan.",
  "Saya menangis karena saya tidak punya sepatu, lalu saya bertemu dengan seorang pria yang tidak punya kaki.",
  "Jadilah seperti ombak, kuat dan tak terbendung.",
  "Senyuman terbaik datang setelah saat-saat tersulit.",
  "Jangan anggap hatimu sepi, anggap saja sebagai istirahat.",
  "Beberapa orang berpura-pura kuat, tapi mereka hancur di dalam.",
  "Sebelum menjadi kupu kupu yang indah, betapa banyak waktu yang harus dilaluinya dalam kepompong.",
  "Saya pikir itu indah bagaimana bulan bersinar menggunakan cahaya matahari dan matahari tidak pernah meminta imbalan apa pun.",
  "Mimpi adalah ilustrasi dari buku yang ditulis jiwamu tentangmu.",
  "Angin tidak berhembus untuk menggoyangkan pepohonan, melainkan menguji kekuatan akarnya.",
  "Mencintai diri sendiri berarti memahami bahwa kamu tidak perlu menjadi sempurna untuk menjadi baik.",
  "Jika kamu mencari satu orang yang akan mengubah hidupmu, lihatlah di cermin.",
  "Kamu layaknya karya seni. Tidak semua orang akan mengerti dirimu, tetapi orang-orang yang mengerti, tidak akan pernah melupakanmu.",
  "Bunga mawar dapat menjadi tamanku dan seorang sahabat bisa menjadi duniaku.",
  "Sahabat sejati tidak akan memiliki dua sisi yang bertolak belakang ketika di depan ataupun di belakangmu.",
  "Hidup adalah sebagian dari apa yang kita buat, dan sebagian apa yang dibuat oleh teman-teman yang kita pilih.","Sahabat sejati tahu sekali seberapa bodohnya kamu dan tetap saja memilih untuk menghabiskan waktu bersamamu.",
  "Teman sejati adalah seseorang yang ada untukmu ketika dia lebih suka berada di tempat lain.",
  "Sahabat tidak pernah menuntut untuk dihargai, dia selalu hadir dengan sejuta hati.",
  "Persahabatan adalah obat untuk hati yang terluka dan vitamin untuk jiwa yang penuh harapan.",
  "Duduk diam di samping teman sejati yang terluka mampu jadi hadiah terbaik yang bisa kita berikan padanya.",
  "Persahabatan itu melindungi seperti ayah, menyayangi seperti ibu, mendengar layaknya seorang kakak, dan mengerti layaknya seorang adik.",
  "Sahabat adalah tentang kebersamaan, bersama dalam meraih impian, bukan tentang saling menjatuhkan.",
  "Hal yang hebat tentang sahabat sejati ialah mereka membawa energi baru ke dalam jiwamu.",
  "Sahabat adalah mereka yang mungkin tak bersamamu ketika kamu sukses, namun mereka yang pasti bersamamu ketika kamu jatuh.",
  "Sahabat sejati adalah orang yang mencintaimu meskipun telah mengenalmu dengan sebenar-benarnya, yaitu baik dan burukmu.",
  "Sebuah berkah bagi persahabatan yang bisa melakukan hal bodoh bersama.",
  "Sahabat yang baik adalah sahabat yang berani membetulkan kita ketika kita berbuat kesalahan, sehingga kita tidak hanyut dalam kesalahan dan dosa.",
  "Sahabat bagaikan roda yang terus berputar, yang membuat lokomotif itu terus berjalan.",
  "Jangan pernah sakiti sahabatmu karena sahabat adalah cara Tuhan untuk menunjukkan bahwa dia tak ingin kamu sendirian.",
  "Sahabat sejati adalah seseorang yang masuk ke hatimu ketika seisi dunia keluar.",
  "Sahabat, bukan jarak yang membuatmu jauh, tetapi sikapmu yang menciptakan jarak.",
  "Persahabatan yang didasari oleh keikhlasan hati dan kasih sayang, akan melahirkan keabadian dalam kebersamaan.",
  "Teman akan menikammu dari belakang, tetapi sahabt akan menamparmu dari depan.",
  "Seorang sahabat tidak akan membuatmu kehilangan harapan, ia akan brusaha membuatmu percaya bahwa kamu sangat berharga.",
  "Butuh banyak keberanian untuk membela musuh, tapi akan lebih banyak lagi untuk membela seorang sahabat kamu.",
  "Sahabat itu mampu membuat kita berharga di saat orang lain tak bisa menghargai kita.",
  "Sahabat adalah seseorang yang menari bersamamu di bawah matahari dan berjalan bersamamu di kegelapan.",
  "Sahabat merupakan seorang makhluk yang menemani saat sedih, senang, dan bahagia, terkadang menyebalkan namun sangat dirindukan jika tak ada.",
  "Sehijau padang rumput yang luas, persahabatan akan terus tumbuh selama masih ada kehidupan.",
  "Persahabatan ibarat sebuah gelas yang rapuh. Kau bisa memperbaikinya saat pecah, tapi bekas retakannya akan selalu ada.",
  "Sahabat bukan tentang siapa yang telah lama kamu kenal, tapi tentang siapa yang menghampiri hidupmu dan tidak pernah meninggalkanmu dalam situasi dan kondisi seburuk apa pun.",
  "Sahabat adalah seseorang yang menyampaikan kebenaran walau terkadang itu menyakitkan. Tapi itu dia lakukan demi kebaikan.",
  "Sahabat sejati bukanlah mereka yang memiliki banyak persamaan, tapi mereka yang memiliki pengertian terhadap setiap perbedaan.",
  "Keluarga adalah tempat terbaik untuk kita belajar tentang sebuah pengorbanan.",
  "Nikmati waktumu bersama sahabat, sebelum datang waktu di mana kamu tidak bisa bertemu dengan sahabatmu lagi.",
  "Keluarga adalah hal terpenting di dunia.",
  "Kehangatan dalam keluarga tidak diukur dari ukuran luas rumahnya, tapi luasnya kebahagiaan yang menempati.",
  "Keluargaku adalah kekuatan dan kelemahanku.",
  "Keluarga adalah kompas yang membimbing kita. Mereka adalah inspirasi untuk mencapai ketinggian yang luar biasa dan kenyamanan saat kita sesekali goyah.",
  "Kamu tidak memilih keluargamu. Mereka adalah pemberian Tuhan untukmu, seperti kamu bagi mereka.",
  "Kamu tidak memilih keluargamu. Mereka adalah pemberian Tuhan untukmu, seperti kamu bagi mereka.",
  "Keluarga adalah salah hal terpenting yang kita miliki, yang tak akan pernah berubah dan selalu ada ketika dibutuhkan.",
  "Setiap keluarga punya cinta dan cerita karena keluarga adalah anugerah yang akan bertahan selamanya.",
  "Kehangatan dalam keluarga tidak diukur dari ukuran luas rumahnya, tapi luasnya kebahagiaan yang menempati.",
  "Tak peduli dimana pun kita berada, keluarga tetap selalu mendoakan untuk kebaikan agar kita dijauhkan dari keburukan.",
  "Hiduplah sedemikian rupa sehingga kamu tidak akan merasa malu ketika orang lain berbicara tentang keluarga kamu.",
  "Keluarga yang baik dibangun dengan cinta, dimulai dengan kasih sayang, dan dipelihara dengan kesetiaan.",
  "Satu-satunya batu karang yang aku tahu tetap stabil, satu-satunya institusi yang aku tahu berfungsi, adalah keluarga.",
]
let diaaaa = motivasi[Math.floor(Math.random() * motivasi.length)]
  conn.reply(m.chat,`???${diaaaa}???`, m)
}
handler.help = ['motivasi']
handler.tags = ['quotes']
handler.command = /^(motivasi)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.limit = true
handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler