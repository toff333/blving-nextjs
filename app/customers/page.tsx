import { Customers, columns } from "./columns";
import { DataTable } from "./customers-table";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "BLVING - Customers",
  description: "BLVING Application Transactions",
}

async function getData(): Promise<Customers[]> {
  // Fetch data from your API here.
  return [
    {
      id: "26e30f74-0d35-587f-8da0-173dd626b40c",
      amount: 174,
      status: "pending",
      name: "Mayme",
      email: "awumu@uga.jo",
    },
    {
      id: "32bd8f0c-0a28-5c89-b27d-86c6c39e866a",
      amount: 852,
      status: "pending",
      name: "Bruce",
      email: "bihgeh@nigu.io",
    },
    {
      id: "c5164a67-1ede-57f3-849a-975ee9b9e300",
      amount: 570,
      status: "pending",
      name: "Eliza",
      email: "uruna@siwsuto.mm",
    },
    {
      id: "b1e85843-98aa-5aab-8fe9-fb98197bae12",
      amount: 365,
      status: "pending",
      name: "Beatrice",
      email: "zudtaapi@ehogupgi.ie",
    },
    {
      id: "53c8ade1-63e3-5436-82e6-81b8d7511cfb",
      amount: 958,
      status: "pending",
      name: "Cordelia",
      email: "hormas@limo.vn",
    },
    {
      id: "04cb94bc-a84c-5702-bb3a-bb76e8850c23",
      amount: 624,
      status: "pending",
      name: "Ophelia",
      email: "netehuz@vul.aw",
    },
    {
      id: "3baeb2e0-2cf1-594b-b7c6-b183c3ceffe8",
      amount: 451,
      status: "pending",
      name: "Jose",
      email: "elop@kij.je",
    },
    {
      id: "41971d23-73f6-544f-8fe9-26f04c2f59b8",
      amount: 156,
      status: "pending",
      name: "Milton",
      email: "emja@nabfah.th",
    },
    {
      id: "c3e5b7bf-0d78-56cf-91e3-c46016f9ead0",
      amount: 96.24,
      status: "pending",
      name: "Olivia",
      email: "omcolbub@lup.ch",
    },
    {
      id: "c93952bc-db89-54bf-8f23-513d60166048",
      amount: 100,
      status: "pending",
      name: "Albert",
      email: "ri@mavegoid.is",
    },
    // ...
  ];
}

export default async function CustomersPage() {
  const data = await getData();

  return (
    <>
      <div className="container-fluid mx-auto px-10 py-10">
        <DataTable columns={columns} data={data} />
      </div>
    </>
  );
}
