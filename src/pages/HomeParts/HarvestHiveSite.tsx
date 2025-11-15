import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom'
import {
  Tractor,
  HandIcon,
  ShoppingCart,
  Globe2,
  Leaf,
  ShieldCheck,
  Calculator,
  BarChart3,
  Boxes,
  UploadCloud,
  DownloadCloud,
  PhoneCall,
  Mail,
  MapPin,
  Search,
  Store,
  Building2,
  LogIn,
  ArrowRight,
  Ship,
  Warehouse,
} from "lucide-react";

// shadcn/ui components
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

// Simple utility
const Container = ({ children }: { children: React.ReactNode }) => (
  <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
);

const Stat = ({ value, label }: { value: React.ReactNode; label: React.ReactNode }) => (
  <div className="rounded-2xl bg-white/70 backdrop-blur shadow-sm ring-1 ring-black/5 p-6 text-center">
    <div className="text-3xl font-extrabold tracking-tight">{value}</div>
    <div className="mt-1 text-sm text-muted-foreground">{label}</div>
  </div>
);

const FeatureCard = ({ icon: Icon, title, desc }: { icon: React.ComponentType<{ className?: string }>; title: string; desc: string }) => (
  <Card className="rounded-2xl shadow-sm">
    <CardHeader className="space-y-1">
      <div className="inline-flex size-12 items-center justify-center rounded-2xl bg-primary/10">
        <Icon className="size-6" />
      </div>
      <CardTitle className="text-xl">{title}</CardTitle>
      <CardDescription>{desc}</CardDescription>
    </CardHeader>
  </Card>
);

const equipmentSeed = [
  { id: 1, name: "Rotavator 7ft", type: "Tillage", price: 1200, unit: "/day" },
  { id: 2, name: "Mini Tractor", type: "Tractor", price: 3500, unit: "/day" },
  { id: 3, name: "Power Sprayer", type: "Protection", price: 600, unit: "/day" },
  { id: 4, name: "Baler", type: "Harvest", price: 2500, unit: "/day" },
  { id: 5, name: "Seed Drill", type: "Sowing", price: 1500, unit: "/day" },
  { id: 6, name: "Combine Harvester", type: "Harvest", price: 9000, unit: "/day" },
];

const marketplaceSeed = [
  { id: 1, sku: "HH-CH-112", name: "Chickpea (Kabuli)", price: 62.5, unit: "₹/kg", stock: 12000, origin: "Madhya Pradesh" },
  { id: 2, sku: "HH-RC-231", name: "Raw Cotton (Shankar 6)", price: 6780, unit: "₹/quintal", stock: 220, origin: "Gujarat" },
  { id: 3, sku: "HH-MS-908", name: "Maize (Yellow)", price: 24.8, unit: "₹/kg", stock: 50000, origin: "Karnataka" },
  { id: 4, sku: "HH-TS-331", name: "Turmeric Finger", price: 129.0, unit: "₹/kg", stock: 8000, origin: "Telangana" },
];

export default function HarvestHiveSite() {
  const [openMenu, setOpenMenu] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [loan, setLoan] = useState({ amount: 200000, tenure: 12, rate: 14 });
  const [q, setQ] = useState("");
  const equipment = useMemo(() => equipmentSeed.filter(e => `${e.name} ${e.type}`.toLowerCase().includes(q.toLowerCase())), [q]);

  const monthlyRate = loan.rate / 12 / 100;
  const emi = useMemo(() => {
    const n = loan.tenure;
    const r = monthlyRate;
    return Math.round((loan.amount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1));
  }, [loan]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white text-slate-900">
      {/* Top Announcement */}
      <div className="w-full bg-emerald-600 text-white">
        <Container>
          <div className="flex items-center justify-between py-2 text-sm">
            <div className="flex items-center gap-2">
              <Leaf className="size-4" />
              <span>Welcome to Harvest Hive — India’s unified agri-trade network.</span>
            </div>
            <div className="hidden sm:block">ISO 27001 • RBI-registered NBFC partners • PAN-India logistics</div>
          </div>
        </Container>
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b">
        <Container>
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-xl bg-emerald-600">
                <Boxes className="size-6 text-white" />
              </div>
              <div>
                <div className="text-xl font-black tracking-tight">Harvest Hive</div>
                <div className="text-xs text-muted-foreground -mt-1">Rent • Trade • Finance • Export</div>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-6 text-sm">
              <a href="#rent" className="hover:text-emerald-700">Rent</a>
              <a href="#loans" className="hover:text-emerald-700">Instant Loans</a>
              <a href="#market" className="hover:text-emerald-700">Marketplace</a>
              <a href="#export" className="hover:text-emerald-700">Import/Export</a>
              <a href="#contact" className="hover:text-emerald-700">Contact</a>
            </nav>
            <div className="hidden md:flex items-center gap-3">
              {/* <Button variant="ghost" className="gap-2"><LogIn className="size-4"/>Sign in</Button>
              <Button className="gap-2">Get Started <ArrowRight className="size-4"/></Button> */}
              <Link to="/login"><Button variant="ghost">Sign in</Button></Link>
              <Link to="/dashboard"><Button>Dashboard</Button></Link>
            </div>
            {/* <Sheet open={openMenu} onOpenChange={setOpenMenu}>
              <SheetTrigger asChild>
                <Button variant="ghost" className="md:hidden">Menu</Button>
              </SheetTrigger>
              <SheetContent side="right">
                <SheetHeader>
                  <SheetTitle>Navigate</SheetTitle>
                </SheetHeader>
                <div className="mt-4 grid gap-3">
                  {[
                    ["Rent", "#rent"],
                    ["Instant Loans", "#loans"],
                    ["Marketplace", "#market"],
                    ["Import/Export", "#export"],
                    ["Contact", "#contact"],
                  ].map(([label, href]) => (
                    <Button key={label} variant="outline" onClick={() => { setOpenMenu(false); location.hash = href; }}>{label}</Button>
                  ))}
                </div>
              </SheetContent>
            </Sheet> */}
          </div>
        </Container>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 py-14 lg:py-20 items-center">
            <div>
              <motion.h1 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.6}} className="text-4xl md:text-5xl font-black tracking-tight">
                The hub for modern agri trade.
              </motion.h1>
              <p className="mt-4 text-lg text-slate-600 max-w-prose">
                Harvest Hive connects farmers, FPOs, traders, and exporters. Rent equipment on-demand, secure instant working-capital loans, and trade commodities locally or across borders — all in one trusted platform.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <div className="relative w-full sm:w-96">
                  <Input value={q} onChange={(e)=>setQ(e.target.value)} placeholder="Search equipment or commodities" className="pl-9" />
                  <Search className="size-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"/>
                </div>
                <Button className="gap-2"><Store className="size-4"/> Explore</Button>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-3">
                <Stat value="35,000+" label="Active growers"/>
                <Stat value="₹210 Cr" label="Liquidity enabled"/>
                <Stat value="120+" label="Districts covered"/>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video w-full rounded-3xl bg-gradient-to-br from-emerald-200 via-white to-emerald-100 ring-1 ring-black/5 p-4">
                <div className="grid h-full w-full grid-cols-2 gap-4">
                  <DemoTile icon={Tractor} title="Rent Equipment" subtitle="On-demand"/>
                  <DemoTile icon={HandIcon} title="Instant Loans" subtitle="Same-day"/>
                  <DemoTile icon={ShoppingCart} title="Trade" subtitle="Spot & forward"/>
                  <DemoTile icon={Globe2} title="Import/Export" subtitle="End-to-end"/>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Features */}
      <section className="py-12" id="features">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard icon={Tractor} title="Rent Agricultural Equipment" desc="Verified owners, usage-based pricing, doorstep delivery & pickup."/>
            <FeatureCard icon={HandIcon} title="Instant Agri Loans" desc="KYC + crop/invoice-backed credit with RBI-compliant partners."/>
            <FeatureCard icon={ShoppingCart} title="Commodity Marketplace" desc="Spot & forward contracts with escrow and QC-at-source."/>
            <FeatureCard icon={Globe2} title="Import/Export Desk" desc="Documentation, customs, logistics & trade finance in one flow."/>
          </div>
        </Container>
      </section>

      <Separator className="my-4"/>

      {/* Rent Section */}
      <section id="rent" className="py-12">
        <Container>
          <div className="flex items-end justify-between">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">Rent Agricultural Commodities & Equipment</h2>
              <p className="text-muted-foreground">Browse nearby listings. All rentals include insurance coverage and 24×7 support.</p>
            </div>
            <Dialog open={openDialog} onOpenChange={setOpenDialog}>
              <DialogTrigger asChild>
                <Button className="gap-2"><UploadCloud className="size-4"/>List your equipment</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-lg">
                <DialogHeader>
                  <DialogTitle>New Equipment Listing</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label>Name</Label>
                    <Input placeholder="e.g., Mini Tractor 25HP"/>
                  </div>
                  <div className="grid gap-2">
                    <Label>Category</Label>
                    <Select>
                      <SelectTrigger><SelectValue placeholder="Select"/></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="tillage">Tillage</SelectItem>
                        <SelectItem value="sowing">Sowing</SelectItem>
                        <SelectItem value="harvest">Harvest</SelectItem>
                        <SelectItem value="protection">Protection</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label>Price (₹/day)</Label>
                      <Input type="number" placeholder="1500"/>
                    </div>
                    <div className="grid gap-2">
                      <Label>Location</Label>
                      <Input placeholder="e.g., Nagpur, MH"/>
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <Label>Photos</Label>
                    <Input type="file" multiple />
                  </div>
                  <Button className="mt-2">Publish</Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {equipment.map(item => (
              <Card key={item.id} className="rounded-2xl">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>{item.name}</CardTitle>
                    <Badge>{item.type}</Badge>
                  </div>
                  <CardDescription>Pickup within 24 hrs • Verified owner</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                  <div className="aspect-video w-full rounded-xl bg-gradient-to-br from-emerald-100 to-white ring-1 ring-black/5 flex items-center justify-center">
                    <Tractor className="size-10"/>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-lg font-semibold">₹{item.price} <span className="text-sm font-normal text-muted-foreground">{item.unit}</span></div>
                    <Button variant="outline" className="gap-2">Book <ArrowRight className="size-4"/></Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Loans */}
      <section id="loans" className="py-12 bg-emerald-50/60">
        <Container>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">Instant Agri Loans</h2>
              <p className="text-muted-foreground">Get working capital in hours. Invoice, crop or warehouse receipt-backed. Transparent pricing, no hidden fees.</p>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <Stat value="₹{(emi*loan.tenure).toLocaleString()}" label="Total Payable (approx)"/>
                <Stat value={`₹${emi.toLocaleString()}`} label={`EMI for ${loan.tenure} mo`}/>
                <Stat value={`${loan.rate}%`} label="Annual Interest"/>
              </div>
              <ul className="mt-6 grid gap-2 text-sm text-slate-600 list-disc list-inside">
                <li>eKYC + bank connect • decision engine</li>
                <li>Partners: NBFCs & banks • escrow disbursal</li>
                <li>Repayment via auto-debit / harvest proceeds</li>
              </ul>
            </div>
            <Card className="rounded-3xl sticky top-24">
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><Calculator className="size-5"/> Loan Calculator</CardTitle>
                <CardDescription>Adjust sliders to estimate your monthly installment.</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-5">
                <div className="grid gap-2">
                  <Label>Amount (₹)</Label>
                  <input type="range" min={50000} max={1000000} step={10000} value={loan.amount} onChange={(e)=>setLoan(v=>({...v, amount: Number(e.target.value)}))}/>
                  <Input type="number" value={loan.amount} onChange={(e)=>setLoan(v=>({...v, amount: Number(e.target.value||0)}))}/>
                </div>
                <div className="grid gap-2">
                  <Label>Tenure (months)</Label>
                  <input type="range" min={3} max={36} step={1} value={loan.tenure} onChange={(e)=>setLoan(v=>({...v, tenure: Number(e.target.value)}))}/>
                  <Input type="number" value={loan.tenure} onChange={(e)=>setLoan(v=>({...v, tenure: Number(e.target.value||0)}))}/>
                </div>
                <div className="grid gap-2">
                  <Label>Interest (annual %)</Label>
                  <input type="range" min={8} max={24} step={0.5} value={loan.rate} onChange={(e)=>setLoan(v=>({...v, rate: Number(e.target.value)}))}/>
                  <Input type="number" value={loan.rate} onChange={(e)=>setLoan(v=>({...v, rate: Number(e.target.value||0)}))}/>
                </div>
                <div className="rounded-xl bg-emerald-50 p-4 ring-1 ring-emerald-200">
                  <div className="text-sm text-slate-600">Estimated EMI</div>
                  <div className="text-3xl font-bold">₹ {emi.toLocaleString()}</div>
                </div>
                <Button className="gap-2">Apply Now <HandIcon className="size-4"/></Button>
              </CardContent>
            </Card>
          </div>
        </Container>
      </section>

      {/* Marketplace */}
      <section id="market" className="py-12">
        <Container>
          <div className="flex items-end justify-between">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">Commodity Marketplace</h2>
              <p className="text-muted-foreground">QC at source • digital weighment • fair and transparent pricing • escrow settlement</p>
            </div>
            <Button variant="outline" className="gap-2"><BarChart3 className="size-4"/> Live Prices</Button>
          </div>

          <Tabs defaultValue="spot" className="mt-6">
            <TabsList>
              <TabsTrigger value="spot">Spot</TabsTrigger>
              <TabsTrigger value="forward">Forward</TabsTrigger>
              <TabsTrigger value="warehouse">Warehouse Receipts</TabsTrigger>
            </TabsList>
            <TabsContent value="spot" className="mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {marketplaceSeed.map((m) => (
                  <Card key={m.id} className="rounded-2xl">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <Badge>{m.origin}</Badge>
                        <span className="text-xs text-muted-foreground">{m.sku}</span>
                      </div>
                      <CardTitle className="text-lg">{m.name}</CardTitle>
                      <CardDescription>Stock: {m.stock.toLocaleString()} kg</CardDescription>
                    </CardHeader>
                    <CardContent className="flex items-end justify-between">
                      <div>
                        <div className="text-2xl font-bold">{m.price} <span className="text-sm font-normal">{m.unit}</span></div>
                        <div className="text-xs text-muted-foreground">Ex-warehouse price</div>
                      </div>
                      <Button className="gap-2">Buy <ShoppingCart className="size-4"/></Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="forward" className="mt-4">
              <Card className="rounded-2xl">
                <CardHeader>
                  <CardTitle>Forward Contracts</CardTitle>
                  <CardDescription>Lock prices for future delivery. Hedge your risk.</CardDescription>
                </CardHeader>
                <CardContent className="grid md:grid-cols-3 gap-4">
                  <div className="grid gap-2">
                    <Label>Commodity</Label>
                    <Select>
                      <SelectTrigger><SelectValue placeholder="Select"/></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="maize">Maize</SelectItem>
                        <SelectItem value="chickpea">Chickpea</SelectItem>
                        <SelectItem value="turmeric">Turmeric</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-2">
                    <Label>Delivery Month</Label>
                    <Select>
                      <SelectTrigger><SelectValue placeholder="Select"/></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="oct">Oct</SelectItem>
                        <SelectItem value="nov">Nov</SelectItem>
                        <SelectItem value="dec">Dec</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-2">
                    <Label>Quantity (MT)</Label>
                    <Input placeholder="e.g., 25"/>
                  </div>
                  <Button className="md:col-span-3">Request Quote</Button>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="warehouse" className="mt-4">
              <Card className="rounded-2xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2"><Warehouse className="size-5"/> Pledge & Trade Against WRs</CardTitle>
                  <CardDescription>Use WDRA-compliant warehouse receipts to access credit and liquidity.</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-3">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="grid gap-2">
                      <Label>WR Number</Label>
                      <Input placeholder="WR-XXXXX"/>
                    </div>
                    <div className="grid gap-2">
                      <Label>Commodity</Label>
                      <Input placeholder="e.g., Turmeric"/>
                    </div>
                    <div className="grid gap-2">
                      <Label>Qty (MT)</Label>
                      <Input placeholder="e.g., 10"/>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Button variant="outline" className="gap-2"><HandIcon className="size-4"/> Get Credit</Button>
                    <Button className="gap-2"><ShoppingCart className="size-4"/> List for Sale</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </Container>
      </section>

      {/* Import/Export */}
      <section id="export" className="py-12 bg-emerald-50/60">
        <Container>
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">Import & Export with Confidence</h2>
              <p className="text-muted-foreground">End-to-end trade operations: contract, QC, customs, logistics, and finance. Work with our vetted global buyers and shipping partners.</p>
              <ol className="mt-6 grid gap-4">
                {[ 
                  ["Share Requirement", "Post your buy/sell need with specs and target port"],
                  ["Quality & Contract", "Third-party QC, digital contract & escrow"],
                  ["Ship & Clear", "Ocean freight booking, insurance, customs clearance"],
                  ["Get Paid", "Documents handling & bank settlement"],
                ].map(([t, d], i) => (
                  <li key={i} className="relative pl-8">
                    <span className="absolute left-0 top-1"><Badge>{i+1}</Badge></span>
                    <div className="font-semibold">{t}</div>
                    <div className="text-sm text-slate-600">{d}</div>
                  </li>
                ))}
              </ol>
              <div className="mt-6 flex gap-3">
                <Button className="gap-2"><UploadCloud className="size-4"/> Post Export Offer</Button>
                <Button variant="outline" className="gap-2"><DownloadCloud className="size-4"/> Post Import Need</Button>
              </div>
            </div>
            <Card className="rounded-3xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><Ship className="size-5"/> Book Trade Logistics</CardTitle>
                <CardDescription>Get instant estimates for ocean freight and insurance.</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label>From (Port)</Label>
                    <Input placeholder="Nhava Sheva (INNSA)"/>
                  </div>
                  <div className="grid gap-2">
                    <Label>To (Port)</Label>
                    <Input placeholder="Jebel Ali (AEJEA)"/>
                  </div>
                  <div className="grid gap-2">
                    <Label>Commodity</Label>
                    <Input placeholder="e.g., Turmeric"/>
                  </div>
                  <div className="grid gap-2">
                    <Label>Volume (MT)</Label>
                    <Input placeholder="e.g., 24"/>
                  </div>
                </div>
                <Button className="gap-2">Get Estimate <ArrowRight className="size-4"/></Button>
              </CardContent>
            </Card>
          </div>
        </Container>
      </section>

      {/* Trust & Compliance */}
      <section className="py-12">
        <Container>
          <div className="grid md:grid-cols-3 gap-6">
            {(
              [
                [ShieldCheck, "Escrow & Insurance", "Funds held till delivery & QC; in-transit insurance included."],
                [Building2, "Licensed Partners", "RBI-registered NBFCs and WDRA-compliant warehouses."],
                [Globe2, "PAN-India Network", "Local aggregation with export-grade compliance."],
              ] as Array<[React.ComponentType<{ className?: string }>, string, string]>
            ).map(([Icon, t, d], i) => {
              const IconComponent = Icon;
              return (
                <Card key={i} className="rounded-2xl">
                  <CardHeader className="space-y-2">
                    <div className="inline-flex size-12 items-center justify-center rounded-2xl bg-primary/10"><IconComponent className="size-6"/></div>
                    <CardTitle>{t}</CardTitle>
                    <CardDescription>{d}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-12 bg-emerald-50/60">
        <Container>
          <h2 className="text-2xl md:text-3xl font-bold">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="mt-6">
            <AccordionItem value="item-1">
              <AccordionTrigger>How fast is the loan approval?</AccordionTrigger>
              <AccordionContent>
                Most decisions are instant after eKYC and bank verification. Disbursal typically occurs the same or next business day through partner NBFCs.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>What happens if equipment is damaged?</AccordionTrigger>
              <AccordionContent>
                All rentals include damage cover with a small deductible. Verified owners and renters are protected by our insurance partner.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Can I trade with international buyers?</AccordionTrigger>
              <AccordionContent>
                Yes. Use our Import/Export Desk for documentation, QC, logistics, and secure payment handling via escrow and banks.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </Container>
      </section>

      {/* Contact */}
      <section id="contact" className="py-12">
        <Container>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">Get in touch</h2>
              <p className="text-muted-foreground">Talk to our onboarding team for Harvest Hive for your FPO or enterprise.</p>
              <div className="mt-6 grid gap-3 text-sm">
                <div className="flex items-center gap-2"><PhoneCall className="size-4"/> +91-00000-00000</div>
                <div className="flex items-center gap-2"><Mail className="size-4"/> hello@harvesthive.example</div>
                <div className="flex items-center gap-2"><MapPin className="size-4"/> Hyderabad • Mumbai • Ahmedabad</div>
              </div>
            </div>
            <Card className="rounded-3xl">
              <CardHeader>
                <CardTitle>Request a Callback</CardTitle>
                <CardDescription>We’ll reach out within one business day.</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="grid gap-2">
                  <Label>Name</Label>
                  <Input placeholder="Your full name"/>
                </div>
                <div className="grid gap-2">
                  <Label>Email</Label>
                  <Input placeholder="you@example.com" type="email"/>
                </div>
                <div className="grid gap-2">
                  <Label>Message</Label>
                  <Textarea placeholder="Tell us what you’re looking for…"/>
                </div>
                <Button className="w-full">Submit</Button>
              </CardContent>
            </Card>
          </div>
        </Container>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white/70">
        <Container>
          <div className="py-10 grid md:grid-cols-4 gap-8 text-sm">
            <div>
              <div className="text-lg font-black">Harvest Hive</div>
              <p className="mt-2 text-muted-foreground">A unified platform for renting, financing and trading agricultural commodities.</p>
            </div>
            <div>
              <div className="font-semibold">Products</div>
              <ul className="mt-2 space-y-2 text-muted-foreground">
                <li><a href="#rent">Rent Equipment</a></li>
                <li><a href="#loans">Instant Loans</a></li>
                <li><a href="#market">Marketplace</a></li>
                <li><a href="#export">Import/Export</a></li>
              </ul>
            </div>
            <div>
              <div className="font-semibold">Company</div>
              <ul className="mt-2 space-y-2 text-muted-foreground">
                <li>About</li>
                <li>Careers</li>
                <li>Press</li>
              </ul>
            </div>
            <div>
              <div className="font-semibold">Legal</div>
              <ul className="mt-2 space-y-2 text-muted-foreground">
                <li>Terms</li>
                <li>Privacy</li>
                <li>Grievance</li>
              </ul>
            </div>
          </div>
          <div className="flex items-center justify-between pb-10 text-xs text-muted-foreground">
            <span>© {new Date().getFullYear()} Harvest Hive Pvt Ltd</span>
            <span>Made with 🌱 in India</span>
          </div>
        </Container>
      </footer>
    </div>
  );
}

function DemoTile({ icon: Icon, title, subtitle }: { icon: React.ComponentType<{ className?: string }>; title: string; subtitle: string }){
  return (
    <motion.div initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.4}} className="rounded-2xl bg-white p-4 ring-1 ring-black/5 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="inline-flex size-10 items-center justify-center rounded-xl bg-emerald-100">
          <Icon className="size-5"/>
        </div>
        <div>
          <div className="font-semibold leading-tight">{title}</div>
          <div className="text-xs text-muted-foreground -mt-0.5">{subtitle}</div>
        </div>
      </div>
    </motion.div>
  );
}
