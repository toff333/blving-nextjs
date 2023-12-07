import connectMongoDB from "@/lib/db/mongodb";
import Customer from "@/models/customer-model";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { first_name, last_name, address, company } = await request.json();
  await connectMongoDB();
  await Customer.create({ first_name, last_name, address, company });
  return NextResponse.json({ message: "Customer created" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const customers = await Customer.find();
  return NextResponse.json(customers, { status: 200 });
}
