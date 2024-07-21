"use client"

import { TrendingUp } from "lucide-react"
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"

interface ChartData {
    year: string
    useFeedbackPlatform: number
    doNotUse: number
}
const chartData = [
    { year: "2019", useFeedbackPlatform: 186, doNotUse: 80 },
    { year: "2020", useFeedbackPlatform: 305, doNotUse: 200 },
    { year: "2021", useFeedbackPlatform: 237, doNotUse: 120 },
    { year: "2022", useFeedbackPlatform: 73, doNotUse: 190 },
    { year: "2023", useFeedbackPlatform: 209, doNotUse: 130 },
    { year: "2024", useFeedbackPlatform: 214, doNotUse: 140 },
]

const chartConfig = {
    useFeedbackPlatform: {
        label: "Use Feedback Platform",
        color: "hsl(var(--chart-1))",
    },
    doNotUse: {
        label: "Do not use",
        color: "hsl(var(--chart-2))",
    },
} satisfies ChartConfig

export function HonestChart() {
    return (
        <Card className="w-full">
            <CardHeader className="md:items-center pb-4">
                <CardTitle>Power of Honest Feedback</CardTitle>
                <CardDescription>
                    Showing survey for last 6 years
                </CardDescription>
            </CardHeader>
            <CardContent className="pb-0">
                <ChartContainer
                    config={chartConfig}
                    className="mx-auto aspect-square max-h-[250px]"
                >
                    <RadarChart data={chartData}>
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent indicator="line" />}
                        />
                        <PolarAngleAxis dataKey="year" />
                        <PolarGrid />
                        <Radar
                            dataKey="useFeedbackPlatform"
                            fill="var(--color-useFeedbackPlatform)"
                            fillOpacity={0.6}
                        />
                        <Radar dataKey="doNotUse" fill="var(--color-doNotUse)" />
                    </RadarChart>
                </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col gap-2 text-sm">
                <div className="flex items-center gap-2 font-medium leading-none">
                    Trending up by 5.2% this year <TrendingUp className="h-4 w-4" />
                </div>
                <div className="flex items-center gap-2 leading-none text-muted-foreground">
                    January 2019 - July 2024
                </div>
            </CardFooter>
        </Card>
    )
}
