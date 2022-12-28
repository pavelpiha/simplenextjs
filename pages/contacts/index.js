import Link from "next/link";
import Layout from "../../components/Layout";
import contacts from "../api/contacts";

export default function Contacts() {
  return (
    <Layout>
      <ul>
        {contacts.map((contact) => {
          return (
            <li key={contact.id}>
              <Link href={`contacts/${contact.id}`}>
                <div>{contact.name}</div>
              </Link>
            </li>
          );
        })}
      </ul>
    </Layout>
  );
}
