export const data = {
    bride: {
        L: {
            id: 1,
            name: 'Abd. Rosid, S.Pd',
            child: 'Putra',
            father: 'H. Sumarto',
            mother: 'Hj. Hosniyah',
            alamat: 'Dsn. Ram Aram, Masaran, Banyuates, Sampang',
            image: './src/assets/images/cowo.png'
        },
        P: {
            id: 2,
            name: 'Nurul Qomariyah',
            child: 'Putri',
            father: 'Moh. Sholeh (alm)',
            mother: 'Rahma',
            alamat: 'Dsn. Tanah Putih, Asemjaran, Banyuates, Sampang',
            image: './src/assets/images/cewe.png'
        },
        couple: './src/assets/images/couple.png'
    },

    time: {
        marriage: {
            year: '2025',
            month: 'Desember',
            date: '04',
            day: 'Kamis',
            hours: {
                start: '08.00',
                finish: 'Selesai'
            }
        },
        reception: {
            year: '2025',
            month: 'Desember',
            date: '07',
            day: 'Minggu',
            hours: {
                start: '08.00',
                finish: 'Selesai'
            }
        },
        address: 'Dsn. Tanah Putih, Asemjaran, Banyuates, Sampang'
    },

    link: {
        calendar: 'https://calendar.app.google/VyuAmNjZ3r78tYNo7',
        map: 'https://maps.app.goo.gl/SQpPujGfvfv4tFoa6',
    },


    bank: [
        {
            id: 1,
            name: 'Abd. Rosid',
            icon: './src/assets/images/mandiri.png',
            rekening: '1090021211826'
        },

    ],

    audio: './src/assets/audio/wedding.mp3',

    api: 'https://script.google.com/macros/s/AKfycbwYPHorg4s6xeyBt3xN8zWg0FUpyZFVcFNf0U4_st3J1G7o4ZI8HnXSpuDP22RdCF04yw/exec',

    navbar: [
        {
            id: 1,
            teks: 'Home',
            icon: 'bx bxs-home-heart',
            path: '#home',
        },
        {
            id: 2,
            teks: 'Mempelai',
            icon: 'bx bxs-group',
            path: '#bride',
        },
        {
            id: 3,
            teks: 'Tanggal',
            icon: 'bx bxs-calendar-check',
            path: '#time',
        },
        {
            id: 4,
            teks: 'Galeri',
            icon: 'bx bxs-photo-album',
            path: '#galeri',
        },
        {
            id: 5,
            teks: 'Ucapan',
            icon: 'bx bxs-message-rounded-dots',
            path: '#wishas',
        },
    ],
}
