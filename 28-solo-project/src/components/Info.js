import cardPhoto from "../images/jerika_pic.jpg";

export default function App() {
  return (
    <div className="card-info rounded">
      <img src={cardPhoto} alt="A woman" className="card-img-top" />
      <div classname="card-body">
        <h2 className="card-title">Jerika Kanz</h2>
        <p className="card--job-title">Frontend Developer</p>
        <p>
          <small>jekanz.de</small>
        </p>
      </div>
      <button className="btn btn-light btn-block d-inline-flex justify-content-center align-items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          class="bi bi-envelope-fill"
          viewBox="0 0 16 16"
        >
          <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
        </svg>
        Email
      </button>
    </div>
  );
}
