export const data = {
    bride: {
        L: {
            id: 1,
            name: 'Lorem Ipsum',
            child: 'Putra ke lorem',
            father: 'Lorem',
            mother: 'Ipsum',
            image: './src/assets/images/cowo.png'
        },
        P: {
            id: 2,
            name: 'Ipsum Lorem',
            child: 'Putri ke lorem',
            father: 'Lorem',
            mother: 'Ipsum',
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
        address: 'Dsn. Tanah putih - Asemjaran'
    },

    link: {
        calendar: 'https://calendar.app.google/oSVLRMYC79GzuA4f9',
        map: 'https://maps.app.goo.gl/q1Ask2Jgd4ekiiKBA',
    },

    galeri: [
        {
            id: 1,
            image: './src/assets/images/1.png'
        },
        {
            id: 2,
            image: './src/assets/images/2.png'
        },
        {
            id: 3,
            image: './src/assets/images/3.png'
        },
        {
            id: 4,
            image: './src/assets/images/4.png'
        },
        {
            id: 5,
            image: './src/assets/images/5.png'
        }
    ],

    bank: [
        {
            id: 1,
            name: 'Abd. Rosid',
            icon: './src/assets/images/bca.png',
            rekening: '1090021211826'
        },

    ],

    audio: './src/assets/audio/wedding.mp3',

    api: 'https://script.google.com/macros/s/AKfycbxZKz2S3k2nwg9BTn4De3JvnpWnCxR7NCQsi5jGstESQqK5T_G08DD5zk4bQuNU34cq3w/exec',

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
