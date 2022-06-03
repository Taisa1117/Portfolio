import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import styles from "../styles/Contact.module.css";
import { useState } from "react";

const Contact = () => {
  const [query, setQuery] = useState({
    name: "",
    email: "",
    company: "",
  });
  const handleParam = () => (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setQuery((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const formSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(query).forEach(([key, value]) => {
      formData.append(key, value);
    });
    fetch("https://getform.io/f/3f157799-33fd-425f-b881-4fc024b2fe33", {
      method: "POST",
      body: formData,
    }).then(() => setQuery({ name: "", email: "", message: "", company: "" }));
    alert("success send your information!");
  };

  return (
    <div>
      <Head>
        <title>Contact</title>
      </Head>
      <Header />
      <div style={{ height: 80 }}></div>
      <main className={styles.contactMain}>
        <h1 className={styles.contactH1}>Contact</h1>
        <br />
        <form onSubmit={formSubmit}>
          <table className={styles.contactTable}>
            <tbody className={styles.toCenter}>
              <tr>
                <th>
                  <label htmlFor="company">会社名</label>
                </th>
                <td>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={query.company}
                    onChange={handleParam()}
                  />
                </td>
              </tr>
              <tr>
                <th>
                  <label htmlFor="name">名前</label>
                </th>
                <td>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={query.name}
                    onChange={handleParam()}
                  />
                </td>
              </tr>
              <tr>
                <th>
                  <label htmlFor="email">Email</label>
                </th>
                <td>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={query.email}
                    onChange={handleParam()}
                  />
                </td>
              </tr>
              <tr>
                <th>
                  <label htmlFor="message">お問合せ</label>
                </th>
                <td>
                  <textarea
                    name="message"
                    rows="5"
                    placeholder="お問合せ内容を入力"
                    value={query.message}
                    onChange={handleParam()}
                  ></textarea>
                </td>
              </tr>
            </tbody>
          </table>
          <button type="submit" className={styles.submitButton}>
            Submit
          </button>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
