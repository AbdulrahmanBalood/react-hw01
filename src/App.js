import { CatComponent } from "./CatComponent";
import './App.css'
function App() {
  return (
    <div className="App">
      <CatComponent
      catImg={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5XVJX48_BR8ZA_lrzYWyNVe04zKD3d3u6yg8lfhx_B7877RpzrnY_2ePtNZRiv72jpCo&usqp=CAU"}
      catName={"cat1"}
      catAge = {2}/>
      <CatComponent
            catImg={"https://images.unsplash.com/photo-1609779361684-8196b3a0abf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2l0dGluZyUyMGNhdHxlbnwwfHwwfHw%3D&w=1000&q=80"}
            catName={"cat2"}
            catAge = {3}/>
      <CatComponent
                  catImg={"https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}
                  catName={"cat3"}
                  catAge = {1}/>
      <CatComponent
                        catImg={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwBCzc5OJPIS8KURZWyEp-wymztGO0Z4irhA&usqp=CAU"}
                        catName={"cat4"}
                        catAge = {2}/>
    </div>
  );
}

export default App;
