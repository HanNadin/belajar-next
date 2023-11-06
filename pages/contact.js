import Head from "next/head";
import Navbar from './components/Navbar';
import Image from "next/image";

const contact = () => {
    return (
        <>
            <Head>
                <title>Contacts  |  Belajar Next JS</title>
                <meta name="description" content="Belajar Next JS" />
            </Head>
            <Navbar />
            <Image src="/vercel.svg" alt="Logo Vercel" width={400} height={200}></Image>
            <h1>Ini halaman Contacts</h1>
        </>
    );
};

export default contact;