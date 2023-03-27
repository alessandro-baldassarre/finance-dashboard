import { DashboardBox } from '@/components/DashboardBox'

interface Props { }

export default function Row2({ }: Props) {
    return (
        <>
            <DashboardBox gridArea="d" />
            <DashboardBox gridArea="e" />
            <DashboardBox gridArea="f" />
        </>
    )
}
