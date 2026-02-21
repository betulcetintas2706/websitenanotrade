import { ArchitectureBlock, ComparisonItem, Metric, TeamMember } from './types';

/* ===========================
   TEAM IMAGES (from src/assets/team/)
   =========================== */
import sehreenImg from './assets/team/sehreen.png';
import seeronImg from './assets/team/seeron.png';
import betulImg from './assets/team/betul.png';

export const ARCHITECTURE_BLOCKS: ArchitectureBlock[] = [
  {
    id: 'matching-engine',
    title: 'Matching Engine',
    description: 'Ultra-low latency core processing.',
    details: ['Binary heap order book', 'CAM lookup (O(1))', '13-stage pipeline', '50–100ns latency'],
    color: '#A855F7',
  },
  {
    id: 'feature-extractor',
    title: 'Feature Extractor',
    description: 'Real-time data preprocessing.',
    details: ['16 real-time market metrics', 'Sliding window calculations', 'Volatility + imbalance tracking'],
    color: '#F59E0B',
  },
  {
    id: 'ml-classifier',
    title: 'ML Anomaly Detector',
    description: 'Neural network for threat detection.',
    details: ['16 → 8 → 6 MLP architecture', '80ns On-Chip INT8 Inference', 'Fixed-point arithmetic in hardware', 'No software kernel involvement'],
    color: '#A855F7',
  },
  {
    id: 'circuit-breaker',
    title: 'Circuit Breaker',
    description: 'Automated protection mechanisms.',
    details: ['Tiered alerts', 'Automatic halt logic', 'Microsecond-level response'],
    color: '#F59E0B',
  },
];

export const COMPARISON_DATA: ComparisonItem[] = [
  { name: 'Software (CPU)', latency: 50, power: 80, cost: 'High OpEx', visual: 'OS Scheduling, Cache Jitter' },
  { name: 'FPGA', latency: 5, power: 15, cost: '$50,000+', visual: 'Expensive, High Power' },
  { name: 'NanoTrade ASIC', latency: 0.05, power: 0.008, cost: '$500 / unit', visual: 'Deterministic, Efficient' },
];

export const METRICS: Metric[] = [
  { label: 'Orders / Second', value: '10M+', subtext: 'Throughput', color: 'purple' },
  { label: 'Matching Latency', value: '<100ns', subtext: 'Deterministic', color: 'purple' },
  { label: 'Anomaly Detection', value: '<250ns', subtext: 'AI Inline', color: 'orange' },
  { label: 'Active Power', value: '8mW', subtext: 'Ultra Efficient', color: 'orange' },
];

export const TEAM: TeamMember[] = [
  {
    name: 'Sehreen Basara',
    role: 'Data and Simulations Engineer',
    description:
      'Builds real-time order book visualizations and market simulations. Expertise in data pipelines and latency analysis for the NanoTrade architecture.',
    image: sehreenImg,
  },
  {
    name: 'Seeron Sivashankar',
    role: 'Core Product Engineer',
    description:
      'Initiated the concept design, the ASIC design, and Verilog implementation. Architected the order matching engine, CAM, and pipeline for sub-100ns execution.',
    image: seeronImg,
  },
  {
    name: 'Betul Cetintas',
    role: 'Machine Learning and QA Engineer',
    description:
      'Designed the on-chip MLP for anomaly detection. Trained models on historical market data and validated 95%+ sensitivity across all 6 anomaly types.',
    image: betulImg,
  },
];