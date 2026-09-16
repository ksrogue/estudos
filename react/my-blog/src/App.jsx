import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import "./App.css";

const supabaseUrl = "https://iunzjaeujvrkrqthobqn.supabase.co";
const supabaseKey = "sb_publishable_LEDS8rfNduGxpsJ7ZykktA_nWZZIhlj";
const supabase = createClient(supabaseUrl, supabaseKey);

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const { data, error } = await supabase.from("posts").select("*");

      if (error) {
        console.error("Erro ao buscar dados:", error);
      } else {
        setPosts(data);
      }
      setLoading(false);
    };

    getData();
  }, []);

  return (
    <div className="app-container">
      <header>
        <h1>Ks Blog</h1>
      </header>
      <main>
        {posts.map((post) => (
          <section key={post.id}>
            <h2>{post.title}</h2>
            <span>{post.desc}</span>
            <p>{post.body}</p>
          </section>
        ))}
      </main>
    </div>
  );
}

export default App;
