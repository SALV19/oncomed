"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Public = () => {
  const pathName = usePathname();

  return (
    <div className="flex h-full flex-col items-center justify-center overflow-y-scroll bg-specialGreen pt-48">
      <Link
        className="font-economica w-10/12 rounded-md bg-white p-2 text-2xl text-specialGreen"
        href={pathName + "/withss"}
      >
        Social Security
      </Link>
      <p className="mb-10 w-10/12">
        There are four parts to the Medicare program. (See Chapter 24.) Medicare
        hospital insurance (Part A) helps pay for inpatient hospital care,
        inpatient care in a skilled nursing facility, home health care, and
        hospice care. Medicare medical insurance (Part B) helps pay for
        physician services, outpatient hospital services, outpatient physical
        therapy, other medical services, and supplies and equipment that are not
        covered by Part A.
      </p>
      <Link
        className="font-economica w-10/12 rounded-md bg-white p-2 text-2xl text-specialGreen"
        href={pathName + "/withoutss"}
      >
        Without Social Security
      </Link>
      <p className="mb-10 w-10/12 pb-10">
        There are four parts to the Medicare program. (See Chapter 24.) Medicare
        hospital insurance (Part A) helps pay for inpatient hospital care,
        inpatient care in a skilled nursing facility, home health care, and
        hospice care. Medicare medical insurance (Part B) helps pay for
        physician services, outpatient hospital services, outpatient physical
        therapy, other medical services, and supplies and equipment that are not
        covered by Part A.
      </p>
    </div>
  );
};

export default Public;
