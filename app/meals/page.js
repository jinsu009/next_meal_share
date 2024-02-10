import { Suspense } from 'react';
import Link from 'next/link';

import classes from './page.module.css';
import { getMeals } from '@/lib/meals';
import MealsGrid from '../components/meals/meals-grid';

export const metadata = {
  title: 'All Meals',
  description: 'Browse the delicious meals shared by our vibrant community.',
};

async function Meals() {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
}

export default function MealsHome() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious Meals &nbsp;
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>Choose your favorite recipe and cook it yourself</p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share Your Favorite Recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense
          fallback={<p className={classes.loading}>Fetching meals...</p>}
        >
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
