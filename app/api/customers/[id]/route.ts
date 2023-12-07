import connectMongoDB from "@/lib/db/mongodb";
import Customer from "@/models/customer-model";
import { NextResponse } from "next/server";

export async function PUT(request: Request, { params }: { params: any }) {
  const { id } = params;
  const { first_name, last_name, address, company } = await request.json();
  await connectMongoDB();
  await Customer.findByIdAndUpdate(id, { first_name, last_name, address, company });
  return NextResponse.json({ message: "Customer updated" }, { status: 200 });
}

export async function GET(request: Request, { params }: { params: any }) {
  const { id } = params;
  await connectMongoDB();
  const customer = await Customer.findOne({ _id: id });
  return NextResponse.json({ customer }, { status: 200 });
}

export async function DELETE(request: Request, { params }: { params: any }) {
  const { id } = params;
  await connectMongoDB();
  const customer = await Customer.findOne({ _id: id });
  return NextResponse.json({ customer }, { status: 200 });
}
