export interface DashboardStage {
  label: string;
  status: 'complete' | 'active' | 'upcoming';
}

export type LedgerPill = 'green' | 'gray' | 'none';

export interface LedgerRow {
  label: string;
  value: string;
  pill: LedgerPill;
}

export const dashboardProject = {
  address: '1511 Cape Velero',
  updatedLabel: 'Updated Today',
  stages: [
    { label: 'Permitting',  status: 'complete' },
    { label: 'Foundation',  status: 'complete' },
    { label: 'Framing',     status: 'active' },
    { label: 'Finishes',    status: 'upcoming' },
    { label: 'Walkthrough', status: 'upcoming' },
  ] as DashboardStage[],
  ledger: [
    { label: 'Foundation Pour',  value: 'On Schedule ✓', pill: 'green' },
    { label: 'Framing Lumber',   value: 'Confirmed ✓',   pill: 'gray'  },
    { label: 'Budget Variance',  value: '$0',             pill: 'gray'  },
  ] as LedgerRow[],
};
