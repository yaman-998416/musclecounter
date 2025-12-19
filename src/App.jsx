import { useState,useEffect } from 'react'
import mm from "./assets/mm.PNG"
import './App.css'
import { useCompliment } from "./hooks/useCompliment";
import { Compliment } from "./components/Compliment";


function App() {

const [count, setCount] = useState(0)


  const MAX=20;
  const MINIMUM=0;

// 状態と処理の取得以下
  const { compliment, pickRandomCompliment } = useCompliment();

 function handleClick() {
    setCount((count) => count + 1,MAX);
  }

  function handleClickdesu(){
    setCount((count) => count - 1,MINIMUM);
  }


   useEffect(() => {
    if (count === MAX) {
      // 下記にはjsファイルを見るとuseStateが使われている。
      // 以下の関数のstateが更新されれば、当app.jsxのコンポーネント関数はまたレンダリングされてしまい、無限ループ：だからuseEffectで囲む
      pickRandomCompliment();
      
    }
  }, [count, MAX, pickRandomCompliment]);


  const progressPercent = (count / MAX) * 100;


   return (
    <>
      <header className="header">
        <a href="https://www.instagram.com/musclemommy.photo/">
          <img
            src={mm}
            alt="brandLogo"
            className="logo react"
            style={{ width: "200px", height: "auto" }}
          />
        </a>
        <h1>筋肉ママ応援カウンター</h1>
        
      </header>

      <div className="card">
        <div>
          <p>{count}歩目</p>
          <div
            style={{
              height: "50px",
              backgroundColor: "white",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                height: "100%",
                width: `${progressPercent}%`,
                backgroundColor: "#3b82f6",
                transition: "width 0.2s ease",
              }}
            />
          </div>

          <button onClick={handleClickdesu} disabled={count <= MINIMUM}>
            -1
          </button>

          <button onClick={handleClick} disabled={count >= MAX}>
            +1
          </button>
        </div>

        {/* ✅ 正しい Compliment */}
        <Compliment
          text={compliment}
          isVisible={count >= MAX}
        />
      </div>

      <footer>
        <p>&copy; ur.musclemommy All rights reserved</p>
      </footer>
    </>
  );
}

export default App;