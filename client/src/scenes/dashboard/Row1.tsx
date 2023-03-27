import { DashboardBox } from '@/components/DashboardBox'

interface Props { }

export default function Row1({ }: Props) {
    return (
        <>
            <DashboardBox gridArea="a" />
            <DashboardBox gridArea="b" />
            <DashboardBox gridArea="c" />
        </>
    )
}
