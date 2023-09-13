import { PageWrapper } from '@/components/PageWrapper/PageWrapper';
import { Sidebar } from '@/components/Sidebar/Sidebar';
import { Texting } from '@/components/Texting/Texting';

export default function Home() {
  return (
    <PageWrapper>
      <div className="app">
        <Sidebar />
        <Texting />
      </div>
    </PageWrapper>
  );
}
