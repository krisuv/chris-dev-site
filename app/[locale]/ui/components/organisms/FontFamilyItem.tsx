'use client';

import { WCAGConformanceLevel, wcagScoreStyleMap } from '@/app/[locale]/lib/utils/style.utils';
import ScoredItem from './ScoredItem';

export default function FontFamilyItem() {
  return (
    <ScoredItem
      inputControl={
        <div>
          <div className="text-[2rem]/[115%] text-bold font-code" />
          <label className="text-[1.2rem] font-code">Font family</label>
        </div>
      }
      description="todo"
      score={WCAGConformanceLevel.FAIL}
      scoreStyleMap={wcagScoreStyleMap}
    />
  );
}
