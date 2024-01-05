import { useState } from "react";
import "./styles.css";

export default function App() {
  const [qiymat, setQiymat] = useState("");
  const [qiymat1, setQiymat1] = useState("");
  const [qiymat2, setQiymat2] = useState("");
  const [natija, setNatija] = useState([]);
  function qoshish() {
    const massiv = [];
    massiv.push({ qiymat });
    return massiv;
  }
  function famil() {
    const massiv1 = [];
    massiv1.push({ qiymat1 });
    return massiv1;
  }
  function email1() {
    const massiv2 = [];
    massiv2.push({ qiymat2 });
    return massiv2;
  }

  return (
    <div className="App">
      <form className="form">
        <h2>Ro'yhatan o'tish</h2>
        <input
          type="text"
          placeholder="Ism"
          value={qiymat}
          onChange={(e) => setQiymat(e.target.value)}
          className="input bg-light-subtle px-3 py-2   mt-3  border  border-secondary text-secondary d-block"
        />
        <input
          type="text"
          placeholder="Familiya"
          value={qiymat1}
          onChange={(e) => setQiymat1(e.target.value)}
          className="input bg-light-subtle px-3 py-2   mt-3  border  border-secondary text-secondary d-block"
        />
        <input
          type="email"
          placeholder="Email"
          value={qiymat2}
          onChange={(e) => setQiymat2(e.target.value)}
          className="input bg-light-subtle px-3 py-2   mt-3  border  border-secondary text-secondary d-block"
        />
        <input
          type="reset"
          value={"Qo'shish"}
          onClick={() => {
            setNatija([
              { id: natija.length, qiymat, qiymat1, qiymat2 },
              ...natija,
            ]);
            setQiymat("");
            setQiymat1("");
            setQiymat2("");
          }}
          className=" class btn btn-outline-success mt-4 ml-5  py-2"
        />

        <input
          type="reset"
          value={"O'chirish"}
          className=" class1 btn btn-outline-danger py-2 "
        />
      </form>
      <div className="sss">.</div>
      {/* // <h1 key={item.id}>{item.qiymat}</h1> */}
      <table class="table table-hover mt-5 border  table-bordered">
        <thead>
          <tr className="border">
            <th scope="col">#</th>
            <th scope="col text-secondary">Ism</th>
            <th scope="col">Familiya</th>
            <th scope="col">Elektron pochta</th>
          </tr>
        </thead>
        <tbody>
          {natija.map((item) => (
            <tr key={item.id}>
              <th scope="row">{i}</th>
              <td>{item.qiymat}</td>
              <td>{item.qiymat1}</td>
              <td>{item.qiymat2}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
