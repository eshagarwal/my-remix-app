import type { MetaFunction , LinksFunction } from "@remix-run/node";
// eslint-disable-next-line import/no-unresolved
import stylesUrl from "~/styles/index.css";
import { Link } from "@remix-run/react";


export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl }
];

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="container">
      <div className="content">
        <h1>
          Remix <span>Jokes!</span>
        </h1>
        <nav>
          <ul>
            <li>
              <Link to="jokes">Read Jokes</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
