import { DashboardBox } from '@/components/DashboardBox'

interface Props { }

export default function Row3({ }: Props) {
    return (
        <>
            <DashboardBox gridArea="g" />
            <DashboardBox gridArea="h" />
            <DashboardBox gridArea="i" />
            <DashboardBox gridArea="j" />
        </>
    )
}
