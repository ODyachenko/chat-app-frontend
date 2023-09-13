import { PageWrapper } from '@/components/PageWrapper/PageWrapper';
import { Sidebar } from '@/components/Sidebar/Sidebar';

export default function Home() {
  return (
    <PageWrapper>
      <div className="app">
        <Sidebar />
      </div>
    </PageWrapper>
  );
}
