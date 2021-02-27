import React from "react";

export default function Home(props) {
  return (
    <div id='home'  className="bg-blue-300 overflow-hidden h-lg  text-white pt-1">
      <div className="flex justify-center mb-1 pt-2 ">
        <img
          className="rounded-full border-4 border-white shadow"
          src="/images/pp.jpg"
          width={200}
          height={200}
          alt="profile"
        />
      </div>
      <p className="font-bold italic text-3xl text-center ">Ach Rizal</p>
      <p className="font-bold  text-center">
        Mahasiswa || Web Development ||Mobile Development
      </p>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#f9fafb"
          fillOpacity="1"
          d="M0,128L10.9,138.7C21.8,149,44,171,65,149.3C87.3,128,109,64,131,53.3C152.7,43,175,85,196,117.3C218.2,149,240,171,262,170.7C283.6,171,305,149,327,165.3C349.1,181,371,235,393,224C414.5,213,436,139,458,101.3C480,64,502,64,524,90.7C545.5,117,567,171,589,192C610.9,213,633,203,655,181.3C676.4,160,698,128,720,112C741.8,96,764,96,785,128C807.3,160,829,224,851,218.7C872.7,213,895,139,916,133.3C938.2,128,960,192,982,229.3C1003.6,267,1025,277,1047,234.7C1069.1,192,1091,96,1113,69.3C1134.5,43,1156,85,1178,133.3C1200,181,1222,235,1244,218.7C1265.5,203,1287,117,1309,85.3C1330.9,53,1353,75,1375,85.3C1396.4,96,1418,96,1429,96L1440,96L1440,320L1429.1,320C1418.2,320,1396,320,1375,320C1352.7,320,1331,320,1309,320C1287.3,320,1265,320,1244,320C1221.8,320,1200,320,1178,320C1156.4,320,1135,320,1113,320C1090.9,320,1069,320,1047,320C1025.5,320,1004,320,982,320C960,320,938,320,916,320C894.5,320,873,320,851,320C829.1,320,807,320,785,320C763.6,320,742,320,720,320C698.2,320,676,320,655,320C632.7,320,611,320,589,320C567.3,320,545,320,524,320C501.8,320,480,320,458,320C436.4,320,415,320,393,320C370.9,320,349,320,327,320C305.5,320,284,320,262,320C240,320,218,320,196,320C174.5,320,153,320,131,320C109.1,320,87,320,65,320C43.6,320,22,320,11,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
}
