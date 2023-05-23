import figure1 from "./catandme.png";
import figure2 from "./catandme2.png";
import figure3 from "./catandme3.png";
import { Link } from "react-router-dom";

function Home() {

    return(
        <div className="justify-content-center text-center mt-3">
            <h1 className="text-dark fw-bold">풀스택 + 인디게임 개발자(가 되고 싶은) 김민우의 TodoList</h1>
            <hr />
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="1000">
                        <img src={figure1} class="d-block w-100" alt="catandme1" height="800" />
                    </div>
                    <div class="carousel-item" data-bs-interval="1000">
                        <img src={figure2} class="d-block w-100" alt="catandme2" height="800" />
                    </div>
                    <div class="carousel-item">
                        <img src={figure3} class="d-block w-100" alt="catandme3" height="800" />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            <hr />
            <Link to="/todo" className="link-dark h5 fw-bold">
                <div class="alert alert-secondary" role="alert">
                    일정 작성하러 이동하기
                </div>
            </Link>
        </div>
    )
}

export default Home;