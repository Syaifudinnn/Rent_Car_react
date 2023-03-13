import React from 'react'
import Navbar from './Navbar'

const Beranda = () => {
    return (
        <div>
            <Navbar />

            {/* Header */}
            <div class="text-center mt-36 mb-20">
                <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Website Penyewaan Mobil</h1>
                <p class="mt-6 text-lg leading-8 text-gray-600">Rent_Car adalah sebuah webiste penyedia layanan penyewaan mobil yang dikembangkan oleh Mukhammad Syaifudin Adn</p>
                <p class="text-lg leading-5 text-gray-600">Di sini, kami menyediakan berbagai pilihan mobil dengan kualitas terbaik untuk bisa anda sewa</p>
                <p class="text-lg leading-7 text-gray-600">tentu saja dengan harga yang terjangkau dan sesuai dengan kualitas</p>
                <div class="mt-10 flex items-center justify-center gap-x-6 mb-16">
                    <a href="/" class="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">Get started</a>
                </div>
            </div>

            {/* Content */}
            <section class="text-gray-600 body-font ">
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-wrap w-full mb-20 flex-col items-center text-center bg-slate-200 ">
                        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 pt-20">Benefit using Rent_Car</h1>
                        <p class="lg:w-1/2 w-full leading-relaxed text-gray-500 pb-20">Berikut adalah keunggulan / keuntungan menggunakan jasa kami</p>
                    </div>
                    <div class="flex flex-wrap -m-4">
                        <div class="xl:w-1/3 md:w-1/2 p-4">
                            <div class="border border-gray-200 p-6 rounded-lg">
                                <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-4">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                    </svg>
                                </div>
                                <h2 class="text-lg text-gray-900 font-medium title-font mb-2">High Performance</h2>
                                <p class="leading-relaxed text-base">Mobil dengan performance terbaik dan stabil tanpa kekurangan</p>
                            </div>
                        </div>

                        <div class="xl:w-1/3 md:w-1/2 p-4">
                            <div class="border border-gray-200 p-6 rounded-lg">
                                <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-4">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                                        <circle cx="6" cy="6" r="3"></circle>
                                        <circle cx="6" cy="18" r="3"></circle>
                                        <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                                    </svg>
                                </div>
                                <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Cut Remote</h2>
                                <p class="leading-relaxed text-base">Memungkinkan admin untuk memotong waktu sewa bila terjadi kerusakan</p>
                            </div>
                        </div>

                        <div class="xl:w-1/3 md:w-1/2 p-4">
                            <div class="border border-gray-200 p-6 rounded-lg">
                                <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-4">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                        <circle cx="12" cy="7" r="4"></circle>
                                    </svg>
                                </div>
                                <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Good Attitude</h2>
                                <p class="leading-relaxed text-base">Pelayanan yang ramah dan sopan serta memuaskan pilihan kami</p>
                            </div>
                        </div>

                        <div class="xl:w-1/3 md:w-1/2 p-4">
                            <div class="border border-gray-200 p-6 rounded-lg">
                                <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-4">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                                        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7"></path>
                                    </svg>
                                </div>
                                <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Accepted Report</h2>
                                <p class="leading-relaxed text-base">Menerima segala komplain tentang kekurangan ataupun kerusakan</p>
                            </div>
                        </div>

                        <div class="xl:w-1/3 md:w-1/2 p-4">
                            <div class="border border-gray-200 p-6 rounded-lg">
                                <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-4">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                                        <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
                                    </svg>
                                </div>
                                <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Moonfall</h2>
                                <p class="leading-relaxed text-base">Pelayanan 24 jam siap melayani segala kebutuhan anda tanpa terkecuali</p>
                            </div>
                        </div>
                        
                        <div class="xl:w-1/3 md:w-1/2 p-4">
                            <div class="border border-gray-200 p-6 rounded-lg">
                                <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-4">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                    </svg>
                                </div>
                                <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Protection</h2>
                                <p class="leading-relaxed text-base">Adanya perlindungan terhadap kerusakan ataupun garansi terhadap mobil yang disewa</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Beranda