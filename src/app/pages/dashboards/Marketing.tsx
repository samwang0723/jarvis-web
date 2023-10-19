import { FC } from "react";
import {
    ListsWidget1,
    ListsWidget2,
    TablesWidget1,
    TablesWidget6,
} from "../../../_theme/partials/widgets";

export const Marketing: FC = () => {
    return (
        <>
            <div className="row gy-5 g-xl-10">
                {/* begin::Col */}
                <div className="col-xl-12 col-xxl-8 mb-5 mb-xl-10">
                    <TablesWidget6 className="h-xl-100" />
                </div>
                {/* end::Col */}
                {/* begin::Col */}
                <div className="col-xxl-6">
                    {/* begin::Row */}
                    <div className="row gx-5 gx-xl-10">
                        {/* begin::Col */}
                        <div className="col-sm-6 mb-5 mb-xl-10">
                            <ListsWidget1 className="h-lg-100" />
                        </div>
                        {/* end::Col */}

                        {/* begin::Col */}
                        <div className="col-sm-6 mb-5 mb-xl-10">
                            <ListsWidget2 className="h-lg-100" />
                        </div>
                        {/* end::Col */}
                    </div>
                    {/* end::Row */}
                    <TablesWidget1 className="mb-xxl-10" />
                </div>
                {/* end::Col */}
            </div>
            {/* end::Row */}
        </>
    );
};
