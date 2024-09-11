import React from "react";
import pohoncoin from "../assets/img/pohoncoin.jpg";
import logoWikrama from "../assets/img/logoWikrama.png";

function Login() {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-[#f9f7f1]"
      style={{ fontFamily: "PT Serif", fontWeight: "400", fontStyle: "normal" }}
    >
      <div className="flex w-full h-full">
        <div className="w-[475px] h-full relative">
          <img
            src={pohoncoin}
            alt="Gambar Samping"
            className="w-full h-[100vh] object-cover rounded-tl-none rounded-tr-[45px] rounded-br-[45px] rounded-bl-none"
          />
          <div
            className="absolute top-0 right-0 bottom-0 w-[200px] rounded-tl-none rounded-tr-[45px] rounded-br-[45px] rounded-bl-none"
            style={{
              background:
                "linear-gradient(to right, rgba(0, 0, 0, 0), #CCBF9D)",
            }}
          ></div>
        </div>

        <div className="flex flex-col justify-center items-start w-full max-w-7xl p-16 relative">
          {/* Logo dan Teks di Paling Atas dengan Position Absolute */}
          <div className="absolute  top-6 right-20 flex items-center">
            <img
              src={logoWikrama}
              alt="Logo Wikrama"
              className="h-[40px] w-[40px] mr-2"
            />
            <span className="text-[13px] font-semibold">
              SMK WIKRAMA BOGOR
            </span>
          </div>

          <div className="w-full flex items-start justify-between">
            <div className="mr-16">
              <p className="mb-4" style={{ fontSize: "20px" }}>
                Selamat Datang
              </p>
              <h1 className="font-bold mb-10" style={{ fontSize: "49px" }}>
                Website Bukti Pembayaran Zakat Infaq & Shadaqoh
              </h1>
            </div>

            <div className="w-full max-w-md">
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-black mb-1"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="appearance-none w-[434px] h-[59px] px-4 py-2 border border-gray-300 rounded-[20px] text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-600 bg-[#A9B782]"
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-black mb-1"
                  >
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    className="appearance-none w-[434px] h-[59px] px-4 py-2 border border-gray-300 rounded-[20px] text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-600 bg-[#A9B782]"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember_me"
                      name="remember_me"
                      type="checkbox"
                      className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                    />
                    <label
                      htmlFor="remember_me"
                      className="ml-2 block text-sm text-gray-900"
                    >
                      Ingat saya
                    </label>
                  </div>
                  <div className="text-sm">
                    <a
                      href="#"
                      className="font-medium text-[#46704A] hover:text-green-600 pr-4"
                    >
                      Lupa Password?
                    </a>
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    style={{ fontSize: "20px" }}
                    className="w-[434px] h-[59px] flex items-center justify-center border border-transparent rounded-[20px] shadow-sm text-sm font-medium text-white bg-gradient-to-b from-[#467048] to-[#AAB883] hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 text-bold"
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="absolute bottom-0 pb-6 text-sm text-gray-500">
            Pengelola Beasiswa SMK Wikrama Bogor
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
