import { useEffect } from "react";
import { useState } from "react";

const UseServices = () => {
  const [services, setServices] = useState([]);
  useEffect(() => { 
    fetch('data.json')
      .then(res => res.json())
      .then(data => setServices(data))
  }, []);
  return [services, setServices];
}
export default UseServices;