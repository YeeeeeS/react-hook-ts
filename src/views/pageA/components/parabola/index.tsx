import React, { useRef, useState } from 'react';
import './index.css';

const ParabolaPage: React.FC<{}> = () => {
  
  const [x, setX]               = useState<number>(0);
  const [y, setY]               = useState<number>(0);
  const [isVisible, setVisible] = useState<boolean>(false);
  const wrapperRef              = useRef<HTMLDivElement>(null);
  const originRef               = useRef<HTMLDivElement>(null);
  const targetRef               = useRef<HTMLDivElement>(null);

  const Parabola = (config: any) => {
    const {
      ballWrapper,
      origin,
      target,
      time = 1000,
      a = 0.004,
      callback,
      finish,
      offset = 0
    } =
      config || {};
    const ballWrapperDimension = ballWrapper.current.getBoundingClientRect();
    const originDimension = origin.current.getBoundingClientRect();
    const targetDimension = target.current.getBoundingClientRect();
    const x1 = originDimension.left + 0.5 * originDimension.width;
    const y1 = originDimension.top + 0.5 * originDimension.height;
    const x2 = targetDimension.left + 0.5 * targetDimension.width;
    const y2 = targetDimension.top + 0.5 * targetDimension.height;
    const diffx = x2 - x1;
    const diffy = y2 - y1;
    const speedx = diffx / time;
    const b = (diffy - a * diffx * diffx) / diffx;
  
    const refPoint_x = x1 - ballWrapperDimension.left - 0.5 * offset;
    const refPoint_y = y1 - ballWrapperDimension.top - 0.5 * offset;
  
    const start = Date.now();
    const timer = setInterval(() => {
      if (Date.now() - start > time) {
        finish();
        clearInterval(timer);
        return;
      }
  
      const x = speedx * (Date.now() - start);
      const y = a * x * x + b * x;
      callback && callback(refPoint_x + x, refPoint_y + y);
    }, 15);
  }

  const onAnimate = () => {
    return new Promise(resolve => {
      const config = {
        ballWrapper: wrapperRef,
        origin: originRef,
        target: targetRef,
        time: 2000,
        a: 0.02,
        callback: updateLocation,
        finish: animationDone.bind(this),
        offset: 8
      };
      Parabola(config);

      function animationDone() {
        setVisible(false)
        resolve();
      }
    });
  };

  const updateLocation = (x:number, y:number) => {
    setX(x);
    setY(y);
    setVisible(true);
  }

  const onAdd = () => {
    onAnimate();
  }

  const animateStyle = {
    transform: `translate(${x}px, ${y}px)`,
    opacity: isVisible ? 1 : 0
  }

  return (
    <>
      <h5>抛物线</h5>
      <button onClick={onAdd}>开始</button>
      <div className="parabola" ref={wrapperRef}>
        <div className="origin" ref={originRef}></div>
        <div className="target" ref={targetRef}></div>
        <div className="ball" style={animateStyle} />
      </div>
    </>
  )
}

export default ParabolaPage;