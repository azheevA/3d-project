import Spline from "@splinetool/react-spline";

export default function App() {
  return (
    <div className="fixed w-full overflow-hidden h-[90%]">
      <Spline
        className="absolute top-0 -right-[20%]"
        scene="https://prod.spline.design/ydQ1jrL7koHvuMyj/scene.splinecode"
      />
    </div>
  );
}
