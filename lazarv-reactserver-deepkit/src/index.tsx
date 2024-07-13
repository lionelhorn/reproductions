import "./index.css";
import {ReflectionClass} from "@deepkit/type";

export default function Index() {
  interface User {
    username: string;
    first: string;
    last: string;
    age: number;
  }

  const r = ReflectionClass.from<User>();
  const properties = r.getPropertyNames();

  return (
    <>{JSON.stringify(properties)}</>
  );
}
