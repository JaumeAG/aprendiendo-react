import { useEffect, useState } from "react";

const FollowMouse= () => {
 const [enable, setEnable] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    console.log("efecto", { enable });

    const handleMove = (event) => {
      const { clientX, clientY } = event;
      console.log("hadleMove", { clientX, clientY });
      setPosition({ x: clientX, y: clientY });
    };

    if (enable) {
      window.addEventListener("pointermove", handleMove);
    }

    //Limpiar la suscripcion al evento, para no quedar en la memoria. ¿Cuando se ejecuta? Cuando el componente se desmonta o cuando cambia la dependencia del useEffect.
    return () => {
      console.log("cleanup");
      window.removeEventListener, ("pointermove", handleMove);
    };
  }, [enable]);

  return (
    <>
     <div
        style={{
          position: "absolute",
          backgroundColor: "#09f",
          borderRadius: "50%",
          opcacity: 0.8,
          pointerEvents: "none",
          left: -20,
          top: -20,
          width: 40,
          height: 40,
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      ></div>

      <button onClick={() => setEnable(!enable)}>
        {enable ? "Desactivar" : "Activar"} seguir puntero
      </button>
    </>
  )
}

function App() {
 

  return (
    <main>
      <FollowMouse />
    </main>
  );
}

export default App;
