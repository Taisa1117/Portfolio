import { style } from "@mui/system";
import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import styles from "../styles/Contact.module.css";

const Contact = () => {
  // Handles the submit event on form submit.
  const handleSubmit = async (event) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault();

    // Get data from the form.
    const data = {
      company: event.target.company.value,
      name: event.target.name.value,
      email: event.target.email.value,
      question: event.target.question.value,
    };

    // Send the data to the server in JSON format.
    const JSONdata = JSON.stringify(data);

    // API endpoint where we send form data.
    const endpoint = "/api/form";

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    // Send the form data to our forms API on Vercel and get a response.
    const response = await fetch(endpoint, options);

    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    let result = await response.json();
    result = result.data.split(" ");
    alert(`名前: ${result[0]} \n
          会社名: ${result[2]} \n
          Email: ${result[1]}`);
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
        <form onSubmit={handleSubmit}>
          <table className={styles.contactTable}>
            <tbody>
              <div className={styles.toCenter}>
                <tr>
                  <th>
                    <label htmlFor="company">会社名</label>
                  </th>
                  <td>
                    <input type="text" id="company" name="company" />
                  </td>
                </tr>
                <tr>
                  <th>
                    <label htmlFor="name">名前</label>
                  </th>
                  <td>
                    <input type="text" id="name" name="name" required />
                  </td>
                </tr>
                <tr>
                  <th>
                    <label htmlFor="email">Email</label>
                  </th>
                  <td>
                    <input type="email" id="email" name="emeil" required />
                  </td>
                </tr>
                <tr>
                  <th>
                    <label htmlFor="question">お問合せ</label>
                  </th>
                  <td>
                    <textarea
                      name="question"
                      rows="5"
                      placeholder="お問合せ内容を入力"
                    ></textarea>
                  </td>
                </tr>
              </div>
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
