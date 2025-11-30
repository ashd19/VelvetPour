import { storeInfo } from "../../constants";
function Footer() {
  return (     
    // from-pink-600 via-purple-700 to-blue-800
    <div className="flex flex-col justify-center items-center w-full  h-screen  text-white radial-gradient   from-pink-600 via-purple-700 to-blue-800">
      <h1 className="text-7xl" style={{}}>
        Velvet Pour
      </h1>
      <p className="">© 2024 Velvet Pour. All rights reserved.</p>
      <div>
        <h1>{storeInfo.heading}</h1>
        <h2>{storeInfo.address}</h2>
        <p>{storeInfo.contact.email}</p>
        <p>{storeInfo.contact.phone}</p>
        </div>
    </div>
  );
}

export default Footer;
