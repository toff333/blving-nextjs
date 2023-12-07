import { Customers, columns } from "./columns";
import { DataTable } from "./customers-table";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "BLVING - Customers",
  description: "BLVING Application Transactions",
};

async function getData(): Promise<Customers[]> {
  try {
    const customers = await getCustomers();

    // EDIT HERE
    const customersWithFullName = customers.map(
      (customer: {
        _id: string;
        first_name: string;
        last_name: string;
        address: string;
        company: string;
      }) => ({
        id: customer._id,
        name: `${customer.first_name} ${customer.last_name}`,
        address: customer.address,
        company: customer.company,
      })
    );

    return customersWithFullName;
  } catch (error) {
    console.error("Error loading customers: ", error);
    return [];
  }
}

async function getCustomers() {
  try {
    const res = await fetch(process.env.BASE_URL + "/api/customers", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch customers");
    }
    return res.json();
  } catch (error) {
    console.error("Error: ", error);
    throw error;
  }
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
