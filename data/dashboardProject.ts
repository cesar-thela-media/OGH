export interface DashboardStage {
  label: string;
  status: 'complete' | 'active' | 'upcoming';
}

export interface LedgerRow {
  label: string;
  value: string;
  positive?: boolean;
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
    { label: 'Foundation Pour',  value: 'On Schedule ✓', positive: true },
    { label: 'Framing Lumber',   value: 'Confirmed ✓',   positive: true },
    { label: 'Budget Variance',  value: '$0',             positive: true },
  ] as LedgerRow[],
};
