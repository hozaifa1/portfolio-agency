import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Github, ArrowLeft, CheckCircle2, Package, Users, BarChart3, FileText, Shield, Zap } from 'lucide-react';
import { projects } from '@/lib/data';
import Contact from '@/components/Contact';

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

const erpFeatures = [
  {
    title: "Foreign Order Management",
    icon: Package,
    description: "Complete order lifecycle tracking with style hierarchy, fabric specifications, and buyer information.",
    details: [
      "Order + style hierarchy with fabric specs and colorways",
      "Document stack with Google Cloud Storage presigned URLs",
      "Categorization pipelines (Upcoming, Running, Archived)",
      "Approval history timelines"
    ]
  },
  {
    title: "Development & Sampling",
    icon: FileText,
    description: "Comprehensive sampling workflow from Lab Dip to Production samples.",
    details: [
      "Lab Dip, Hand Loom, Strike-Off, PP sample tracking",
      "Versioned submissions with courier logging",
      "Mandatory resubmission plans",
      "Photo viewer dialog for instant review"
    ]
  },
  {
    title: "Financial Management",
    icon: BarChart3,
    description: "Multi-version invoicing and Letter of Credit tracking system.",
    details: [
      "Proforma Invoices (Draft/Sent/Revised/Confirmed)",
      "LC tracker with expiry alerts",
      "Discrepancy notes and document attachments",
      "Automated financial reporting"
    ]
  },
  {
    title: "Local Production & Daily Metrics",
    icon: Zap,
    description: "Real-time production cockpit with throughput monitoring.",
    details: [
      "Floor-level tracker for local orders",
      "Cuts, finishing, and delivery status",
      "Inline order/line notes for instant coaching",
      "KPI widgets and gradient cards"
    ]
  },
  {
    title: "Incidents & Blockers",
    icon: Shield,
    description: "Comprehensive incident management with action plans.",
    details: [
      "Capture rejections, breakdowns, and delays",
      "Action plans with owners and due dates",
      "Status transitions and evidence uploads",
      "Auditable escalation trails"
    ]
  },
  {
    title: "Shipments & Logistics",
    icon: Users,
    description: "End-to-end shipment tracking and documentation.",
    details: [
      "Packing list, invoice, and AWB uploads",
      "ETD/ETA tracking",
      "Delivery confirmation workflow",
      "Real-time notification system"
    ]
  }
];

const lmsFeatures = [
  {
    title: "Multi-Program Coverage",
    icon: Package,
    description: "Support for BBA, MBA, CSE, THM, EEE, and LLB curricula with consistent metadata.",
    details: [
      "6+ academic programs supported",
      "Consistent fee structure across programs",
      "Duration tracking and semester management",
      "Automated curriculum seeding"
    ]
  },
  {
    title: "Official Syllabi Integration",
    icon: FileText,
    description: "Import National University syllabi (2015-2018) for every semester and major.",
    details: [
      "Word-level timestamp transcription",
      "Credits and marks alignment",
      "PDF source verification",
      "Automated subject code generation"
    ]
  },
  {
    title: "Exam & Result Automation",
    icon: BarChart3,
    description: "Generate three canonical exams per subject with automated result processing.",
    details: [
      "Automated exam generation",
      "Sample result creation for QA",
      "No manual data entry required",
      "Grade distribution analytics"
    ]
  },
  {
    title: "Major-Aware Result Entry",
    icon: CheckCircle2,
    description: "React modal matches students with exams filtered by course, semester, and major.",
    details: [
      "Smart subject filtering",
      "Prevents mismatched grades",
      "Course-specific validation",
      "Real-time error prevention"
    ]
  },
  {
    title: "Biometric Integration",
    icon: Users,
    description: "Integrated biometric attendance sync for 500+ students.",
    details: [
      "Fingerprint scanner integration",
      "Real-time attendance tracking",
      "Automated sync with student records",
      "Attendance report generation"
    ]
  },
  {
    title: "Academic Payment Processing",
    icon: Shield,
    description: "Secure payment processing with automated result generation.",
    details: [
      "Payment gateway integration",
      "Automated receipt generation",
      "Result release upon payment",
      "Financial reporting dashboard"
    ]
  }
];

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    notFound();
  }

  const isERP = project.id === 'prova-erp';
  const isLMS = project.id === 'igmis-lms';
  const features = isERP ? erpFeatures : isLMS ? lmsFeatures : null;

  return (
    <main className="pt-16">
      <article className="min-h-screen bg-slate-50">
        <div className="bg-gradient-to-br from-slate-900 to-blue-900 text-white py-20">
          <div className="max-w-6xl mx-auto px-4">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Portfolio
            </Link>
            <h1 className="text-5xl font-bold mb-4">{project.title}</h1>
            <p className="text-xl text-slate-300">{project.client} • {project.category}</p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 py-16">
          {project.image && (
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
              <div className="relative aspect-video">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          )}

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {Object.entries(project.impact).map(([key, value]) => (
              <div key={key} className="bg-white p-6 rounded-xl shadow-md text-center border border-slate-200">
                <div className="text-3xl font-bold text-cyan-600 mb-2">{value}</div>
                <div className="text-slate-600 capitalize font-medium">{key}</div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl shadow-md p-8 mb-12 border border-slate-200">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Project Overview</h2>
            <p className="text-lg text-slate-700 mb-8 leading-relaxed">{project.description}</p>

            {isERP && (
              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 mb-8 border border-cyan-200">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Why Teams Choose Provabook</h3>
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-slate-900">Unified Source of Truth</p>
                      <p className="text-slate-700 text-sm">Orders, samples, production, incidents, and shipments share one PostgreSQL-backed data model with audit trails.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-slate-900">Live Production Cockpit</p>
                      <p className="text-slate-700 text-sm">Daily metrics feed dashboards so managers can coach lines without chasing WhatsApp updates.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-slate-900">Financial Compliance</p>
                      <p className="text-slate-700 text-sm">Versioned PIs, LC milestone clocks, and document vaults reduce banking surprises.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {isLMS && (
              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 mb-8 border border-cyan-200">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Key Capabilities</h3>
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-slate-900">Multi-Course Coverage</p>
                      <p className="text-slate-700 text-sm">Supports BBA, MBA, CSE, THM, EEE, and LLB curricula with consistent metadata and fee structures.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-slate-900">National University Alignment</p>
                      <p className="text-slate-700 text-sm">Official syllabi ingestion (2015-2018) ensures subjects, credits, and marks align with source PDFs.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-slate-900">Smart Result Management</p>
                      <p className="text-slate-700 text-sm">Major-aware filtering prevents mismatched grades by matching students with course-specific exams.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <h3 className="text-2xl font-bold text-slate-900 mb-4">Key Achievements</h3>
            <ul className="space-y-3 mb-8">
              {project.highlights.map((highlight, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-cyan-100 text-cyan-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-sm">
                    {i + 1}
                  </span>
                  <span className="text-slate-700">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {features && (
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Core Features & Modules</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {features.map((feature, idx) => {
                  const Icon = feature.icon;
                  return (
                    <div key={idx} className="bg-white rounded-xl shadow-md p-6 border border-slate-200 hover:shadow-lg transition-shadow">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                          <p className="text-slate-600 text-sm">{feature.description}</p>
                        </div>
                      </div>
                      <ul className="space-y-2">
                        {feature.details.map((detail, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm">
                            <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full mt-1.5 flex-shrink-0"></div>
                            <span className="text-slate-700">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          <div className="bg-white rounded-2xl shadow-md p-8 mb-12 border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Technology Stack</h3>
            <div className="flex flex-wrap gap-3">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="px-5 py-2.5 bg-gradient-to-br from-slate-100 to-slate-200 text-slate-800 rounded-lg font-semibold border border-slate-300 hover:shadow-md transition-shadow"
                >
                  {tech}
                </span>
              ))}
            </div>

            {(isERP || isLMS) && (
              <div className="mt-8 pt-8 border-t border-slate-200">
                <h4 className="text-lg font-bold text-slate-900 mb-4">Architecture Highlights</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {isERP && (
                    <>
                      <div className="flex gap-3 p-4 bg-slate-50 rounded-lg">
                        <Shield className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-slate-900 text-sm">JWT Authentication</p>
                          <p className="text-slate-600 text-xs">Django + SimpleJWT with role-based permissions</p>
                        </div>
                      </div>
                      <div className="flex gap-3 p-4 bg-slate-50 rounded-lg">
                        <FileText className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-slate-900 text-sm">Secure File Storage</p>
                          <p className="text-slate-600 text-xs">Google Cloud Storage with presigned access</p>
                        </div>
                      </div>
                      <div className="flex gap-3 p-4 bg-slate-50 rounded-lg">
                        <Zap className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-slate-900 text-sm">Real-time Updates</p>
                          <p className="text-slate-600 text-xs">React Query + Zustand state management</p>
                        </div>
                      </div>
                      <div className="flex gap-3 p-4 bg-slate-50 rounded-lg">
                        <BarChart3 className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-slate-900 text-sm">Audit Logging</p>
                          <p className="text-slate-600 text-xs">Complete activity tracking & notification feeds</p>
                        </div>
                      </div>
                    </>
                  )}
                  {isLMS && (
                    <>
                      <div className="flex gap-3 p-4 bg-slate-50 rounded-lg">
                        <Package className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-slate-900 text-sm">Django REST Framework</p>
                          <p className="text-slate-600 text-xs">Course catalogs, exams, and grading APIs</p>
                        </div>
                      </div>
                      <div className="flex gap-3 p-4 bg-slate-50 rounded-lg">
                        <Users className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-slate-900 text-sm">React + Vite Frontend</p>
                          <p className="text-slate-600 text-xs">Modern dashboards with Tailwind CSS</p>
                        </div>
                      </div>
                      <div className="flex gap-3 p-4 bg-slate-50 rounded-lg">
                        <Shield className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-slate-900 text-sm">PostgreSQL Database</p>
                          <p className="text-slate-600 text-xs">Robust data management and integrity</p>
                        </div>
                      </div>
                      <div className="flex gap-3 p-4 bg-slate-50 rounded-lg">
                        <Zap className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-slate-900 text-sm">Automated Seeding</p>
                          <p className="text-slate-600 text-xs">Management commands for syllabi & exams</p>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            )}
          </div>

          {project.github && (
            <div className="flex gap-4 justify-center">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors shadow-lg hover:shadow-xl"
              >
                <Github className="w-5 h-5" />
                View Source Code
              </a>
            </div>
          )}
        </div>
      </article>

      <Contact />
    </main>
  );
}
