import "bootstrap/dist/css/bootstrap.min.css";
// import Image from "react-bootstrap/Image";
import Carousel from 'react-bootstrap/Carousel'
import React , {Component} from "react";
import CommentBox from './Komentar';
import Banner from '../assets/bannerArtikel.png'
import './style.css';
import { Form, Button, Col, Container, Row} from "react-bootstrap";


class Artikel extends Component {
  
  render() {
  return (
    <div>
      <Container>
        <Row>
        <Carousel>
  <Carousel.Item>
    <img 
      src={Banner}
      alt="First slide"
    />
    <Carousel.Caption>
        <h1 style={h1Style}>TREND</h1>
      <h1 style={h2Style}>UI/UX Design</h1>
      <h1 style={h1Style}>2021 !</h1>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      src={Banner}
      alt="Third slide"
    />

    <Carousel.Caption>
    
    <h1 style={h1Style}>TREND</h1>
      <h1 style={h2Style}>UI/UX Design</h1>
      <h1 style={h1Style}>2021 !</h1>
      
    </Carousel.Caption>
  </Carousel.Item>
 
</Carousel>
        </Row>
        <br></br>
<Container>
<Row>
    <Col sm={8}><p>
    Tren di dunia digital dan ekspektasi pengguna berubah setiap harinya. Ini berarti bahwa entrepreneurs harus mengikuti tren terbaru saat ini supaya bisa menonjol di pasaran. Karena banyak pengunjung yang datang mengunjungi beberapa situs web secara terus-menerus yang artinya kamu harus bisa menarik perhatian mereka agar tidak tertinggal. Salah satu caranya adalah dengan membangun solusi web yang menarik secara visual. Mari simak 7 tren desain UI/UX yang akan populer di tahun 2020-2021!
<br></br>
1. Dark Mode
<br></br>
Ini merupakan salah satu tren terpanas di 2020, mulai dari Instagram, Apple, dan Android menambahkan fitur dark mode pada tema mereka. Alasan dark mode menjadi tren saat ini karena dengan mode dark mode akan membuat kesan ultra-modern, memberikan highlight pada elemen desain lainnya, menghemat daya baterai perangkat (pada layar OLED/AMOLED), mengurangi ketegangan mata dalam kondisi cahaya redup. 
<br></br>
2. Soft Shadows, Layers, dan Floating Element
<br></br>
Apakah kamu ingin membuat elemen 3 dimensi dengan mulus? Kamu bisa menambahkan soft shadows atau bayangan lembut dan floating visual yang membangkitkan perasaan positif. Mereka membuat desainmu terlihat sedikit 3D dan bisa di aplikasikan ke grafik, teks, gambar, video dan lainnya. Pada 2020, perusahaan desain UI/UX secara aktif menggunakan layering untuk menempatkan elemen di atas satu sama lain. 
<br></br>
3. Grafik dan Fotografi
<br></br>
Tren desain panas lainnya di tahun 2020 adalah grafik yang tumpang tindih ke gambar. Teknik ini memungkinkan kamu untuk menggunakan kreatifitasmu dan menerapkan desain yang luar biasa.. Kamu bisa menggunakannya untuk menciptakan sesuatu yang menyenangkan pada gambar produk atau menambah keseriusan pada situs web keuangan atau teknologi..
<br></br>
4. Foto Produk yang Menarik
<br></br>
Salah satu tren terbaru dalam desain UI/UX adalah menggunakan foto produk dengan teknik surreal. Tren ini diprediksi akan menjadi salah satu tren terbesar pada platform e-commerce dan online stores. Ide utamanya adalah untuk menarik perhatian customer dengan menampilkan elemen yang menarik dan tidak nyata. Membuat para customer harus memiliki sisi kreatif dan pandai dalam melihat detail untuk menebak barang apa yang sedang ditampilkan. 
<br></br>
5. Bold Fonts
<br></br>
Bold font bukanlah inovasi di tahun 2020, tapi tren ini mendapatkan momentum yang tepat. Masalahnya adalah sebagian besar pengguna memperhatikan judul halaman web terlebih dahulu. Karena itu penting menggunakan bold font pada judul untuk menarik perhatian pelanggan. Teknik ini juga memungkinkan kamu untuk menambah lebih banyak sentuhan visual pada informasi, kategori, subjek, layanan, hingga produk. Tren ini juga menambahkan tampilan modern pada website.
<br></br>
6. Kombinasi Warna Unik dan Futuristik
<br></br>
2020 adalah tentang warna-warna cerah dan berani dalam penggunaan warna. Menggunakan warna yang kelihatannya tidak berpadu sempurna antara satu dan lainnya mampu menarik pengunjung karena keunikannya. Terlebih lagi kepada pengunjung yang kebanyakan mengunjungi website yang memiliki warna yang monoton, kombinasi cerah dan unik dari percampuran warna ini akan menempel di ingatan.
<br></br>
7. VUI (Voice User Interface)
<br></br>
Voice chatbots dan asisten virtual menjadi tren terpanas tahun ini. Mereka mengubah cara kita mencari informasi, membuat catatan, dan lainnya. Bran seperti Apple, Android dan Google telah menerapkan tren ini dalam desain UI/UX mereka. 
      </p></Col>
    <Col sm={4}><CommentBox /></Col>
  </Row>
</Container>
      </Container>
    </div>
  );
  }
}

const h1Style = {
    fontFamily: 'Montserrat',
    fontSize: '35px',
    textAlign: 'right',
    color:'black',
    fontWeight: 'bold'
   

}

const h2Style = {
    fontFamily: 'Montserrat',
    fontSize: '30px',
    textAlign: 'right',
    color: 'red',
    fontWeight: 'bold'
}


export default Artikel;